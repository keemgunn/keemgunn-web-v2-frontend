<template>
<article :id="articleSeed.serial" 


@trigger="conveyEvent" 
>


  <p class="typo-header3">{{this.articleSeed.serial}}</p>


</article>
</template>



<script>
const name = 'ArticleContainer';
import { mapGetters, mapMutations, mapActions } from 'vuex';
import { defineAsyncComponent } from 'vue';


const props = { 
  articleSeed: Object, 
};


const emits = [ 'trigger' ];


function data() { return {
  // state data from articleSeed obj.
  blocks: [], // Array of String
  sensorConfigs: {}, // { ...Scales : { ...sensors } }
  modalConfigs: {}, // { ...Scales : { ...modals } }

  // state data made in this component.
  el : {},
  states: {}, // {modals, sensors}
}}


  // ---- DYNAMIC COMPONENT IMPORT
const components = {};
  // get filenames in the directory using webpack method.
const blockFiles = require.context(
  '@/components/IDAS/blocks/', true, /^.*\.vue$/
);
  // for filenames, dynamically import the modules.
for (let file of blockFiles.keys()) {
  const blockName = file.replace('./', '').replace('.vue', '')
  components[blockName] = defineAsyncComponent(() => import("./blocks/" + blockName + ".vue"))
}


const computed = {
  ...mapGetters('',[  ]),
  
};


const methods = {
  ...mapMutations('', [  ]),
  ...mapActions('', [  ]),

  // Conveys Trigger Event
  conveyEvent(payload) {
    this.$emit('trigger', payload);
  },
  
  // Emits Trigger Event
  triggerEvent(method, data=null) {
    this.$logg(this.articleSeed.serial, ': triggerEvent :', method);
    this.$emit('trigger', {
      serial: this.articleSeed.serial,
      method, data
    })
  },

  setModalState(name='modal-name', payload){
    this.$logg(this.articleSeed.serial, ': setModalState :', name, payload);
    if (this['states']['modals'][name]) {
      this['states']['modals'][name] = payload === 'toggle' ? !this['states']['modals'][name] : payload;
    }
  },

  _mouseEnter(context) { return function () {
      context.$logg(context.articleSeed.serial, '- mouseEnter');
      context.setModalState('hover', true);
      context.setModalState('touched', false);
    }
  },
  _mouseMove(context) { return function () {
      context.$logg(context.articleSeed.serial, '- mouseMove');
    }
  },
  _mouseLeave(context) { return function () {
      context.$logg(context.articleSeed.serial, '- mouseLeave');
      context.setModalState('hover', false);
    }
  },
  _touchStart(context) { return function () {
      context.$logg(context.articleSeed.serial, '- touchStart');
      context.setModalState('hover', true);
      context.setModalState('touched', true);
      setTimeout(context.mouseLeave, 2000);
    }
  },

};
const listenersList = Object.keys(methods)
  .filter(name => name.startsWith('_'))
  .map(name => name.replace('_', ''));
for (const listener of listenersList) {
  methods[listener] = function () {};
}


const watch = {
};


function beforeCreate() {
  
}
  
  
function created() {
  this.$logg(name, this.articleSeed.serial, "~ created ~");
  this.$logg("articleSeed:",this.articleSeed);

  // Inject State Data 
  this.blocks = Object.keys(this.articleSeed.nested);
  this.sensorConfigs = this.articleSeed.sensorConfigs;
  this.modalConfigs = this.articleSeed.modalConfigs;
  this.states = this.articleSeed.states;

  // Inject Listener Callbacks 
  const extensionMethodsList = Object.keys(this.articleSeed.injectTriggers);

  for (const listener of listenersList) {
    const basic = this['_' + listener](this);
    if(extensionMethodsList.includes(listener)) {
      const ext = this['articleSeed']['injectTriggers'][listener](this);
      this[listener] = function () {
        basic();
        ext();
      }
    } else {
      this[listener] = function () {
        basic();
      }
    }
  }

}


function beforeMount() {
}




function mounted() { this.$logg(name, this.articleSeed.serial, "~ mounted ~");

  // Attach DOM Event Listener
  this.el = document.querySelector("#" + this.articleSeed.serial);
  for (const listener of listenersList) {
    this.el.addEventListener(listener.toLowerCase(), this[listener], { passive: true });
  }

}


function beforeUpdate() {
}


function updated() { this.$logg(name, this.articleSeed.serial, "~ updated ~");
}


function beforeUnmount() {
}


function unmounted() {
}


export default {
  name, props, emits,
  components, 
  data, computed, 
  methods, 
  watch, 
  beforeCreate, created, 
  beforeMount, mounted, 
  beforeUpdate, updated, 
  beforeUnmount, unmounted
}
</script>