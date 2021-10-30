<template>
<article :id="articleSeed.serial" 
@mouseenter="mouseEnter()"
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
  states: {},
  classKit: {},
  styleKit: {},
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

  mouseEnter() {},

  // Emits Trigger Event
  triggerEvent(method) {
    this.$emit('trigger', {
      serial: this.articleSeed.serial,
      method
    })
  },

};


const watch = {
};


function beforeCreate() {
  }


function created() {
  this.$logg(name, this.articleSeed.serial, "~ created ~");
  this.$logg("articleSeed:",this.articleSeed);


  console.log('methods:', methods);
  methods.mouseEnter = this.articleSeed.eventReactors.mouseEnter();

}


function beforeMount() {
}


function mounted() { this.$logg(name, this.articleSeed.serial, "~ mounted ~");
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