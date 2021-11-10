<template><article :id="articleSeed.serial" 
  :class="fetchCSS.class" 
  :style="fetchCSS.style"
  @trigger="conveyEvent" 
>

  <p class="typo-header3">{{this.articleSeed.serial}} {{this.position}}</p>


</article>
</template>
<script>
const name = 'ArticleContainer';
import { mapGetters, mapMutations, mapActions } from 'vuex';
import { defineAsyncComponent } from 'vue';
import { modalFetcher } from '@/functions/cssFetchers';
import { watchPosition } from '@/functions/watchers';


const props = { articleSeed: Object, position: Number };
const emits = [ 'trigger' ];
function data() { return {
// state data from articleSeed obj. ---------------
  blocks: [], // Array of String
  sensorConfigs: {},
  modalConfigs: {}, // { ...Scales : { ...modals } }
// state data made in this component. -------------
  el : {}, // Injected at created(), used by updaters
  states: {}, // { modals }
}}


// ---- DYNAMIC COMPONENT IMPORT ------------------
// get filenames in the directory using webpack method.
// for filenames, dynamically import the modules.
const components = {};
const blockFiles = require.context('@/components/IDAS/blocks/', true, /^.*\.vue$/);
for (let file of blockFiles.keys()) {
  const blockName = file.replace('./', '').replace('.vue', '')
  components[blockName] = defineAsyncComponent(() => import("./blocks/" + blockName + ".vue"))
}


const computed = {
  ...mapGetters('ui',[ 'getScale' ]),
  // Fetched Element class and styles -------------
  // based on window scale and component states.
  fetchCSS() {
    const bundle = this.getCSSbyModal(
      this['modalConfigs'][this.getScale],
      this['states']['modals']
    );

    if (typeof this['sensorConfigs'][this.getScale]['position']['StyleCalc'] !== 'undefined') {
      bundle.style.push(this['sensorConfigs'][this.getScale]['position']['StyleCalc'](this.position));
    }

    return bundle
  },

};


const methods = {
  ...mapMutations('', [  ]),
  ...mapActions('', [  ]),

  // Conveys Trigger Event ------------------------
  conveyEvent(payload) {
    this.$emit('trigger', payload);
  },
  // Emits Trigger Event --------------------------
  triggerEvent(method, data=null) {
    if((method !== null) && (typeof method !== 'undefined')) {
      this.$logg(this.articleSeed.serial, ': triggerEvent :', method);
      this.$emit('trigger', {
        serial: this.articleSeed.serial,
        method, data
      })
    }
  },

  // Change Component Modal States. ---------------
  // Called by EventListener Callbacks.
  setModalState(name='modal-name', payload){
    this.$logg(this.articleSeed.serial, ': setModalState :', name, payload);
    if (typeof this['states']['modals'][name] !== 'undefined') {
      this['states']['modals'][name] = (payload === 'toggle') ? !this['states']['modals'][name] : payload;
    }
  },

  // CSS Fetch Method will be injected in here. ---
  // Since computed() properties are read-only, 
  // Injection has to apply to method() property.
  getCSSbyModal() {},
  attachCSSbySensor() {},

// Event Listeners ============================
  // eventListeners will be attached based on these names,
  _mouseEnter(context) { return function () {
      context.setModalState('hover', true);
      context.setModalState('touched', false);
    }
  },
  _mouseMove() { return function () {
    }
  },
  _mouseLeave(context) { return function () {
      context.setModalState('hover', false);
    }
  },
  _touchStart(context) { return function () {
      context.setModalState('hover', true);
      context.setModalState('touched', true);
      setTimeout(context.mouseLeave, 2000);
    }
  },
  _click() { return function () {
    }
  },
// ================================================
};


// Make Lists of evnetListeners -------------------
//     => for Listeners Attachment
const listenersList = Object.keys(methods)
  .filter(name => name.startsWith('_'))
  .map(name => name.replace('_', ''));
for (const listener of listenersList) {
  methods[listener] = function () {};
}


const watch = {
  position(newValue) {
    watchPosition(newValue, this);
  }
};


function beforeCreate() {  }
  
  
function created() {

  // Inject State Data ----------------------------
  this.blocks = Object.keys(this.articleSeed.nested);
  this.sensorConfigs = this.articleSeed.sensorConfigs;
  this.modalConfigs = this.articleSeed.modalConfigs;
  this.states = this.articleSeed.states;

  // Inject Modal Fetcher -------------------------
  this.getCSSbyModal = modalFetcher();

  // Inject Listener Callbacks --------------------
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


function beforeMount() {  }


function mounted() { 

  // Attach DOM Event Listener --------------------
  this.el = document.querySelector("#" + this.articleSeed.serial);
  for (const listener of listenersList) {
    this.el.addEventListener(listener.toLowerCase(), this[listener], { passive: true });
  }

}


function beforeUpdate() {  }
function updated() {  }
function beforeUnmount() {  }
function unmounted() {  }
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