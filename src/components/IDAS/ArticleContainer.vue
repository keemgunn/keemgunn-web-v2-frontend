<template><article :id="articleSeed.serial" 
  :class="fetchCSS.class" 
  :style="fetchCSS.style"
>

  <component 
    v-for="block of Object.keys(articleSeed.nested)"
    :key="block"
    :blockSeed="articleSeed['nested'][block]"
    :is="articleSeed['nested'][block]['type']"
    :downstream="downstream" 
    :position="position"
    @trigger="tossEvent"
    @mounted="childMounted(this)"
  />

</article>
</template>
<script>
const name = 'ArticleContainer';
import { mapGetters } from 'vuex';
import { defineAsyncComponent } from 'vue';
import { getConfigsByScale, getCSSbyModal } from '@/functions/modals';
import { childMounted, triggerEvent } from '@/functions/triggers';
import { watchPosition, positionTrigger } from '@/functions/watchers';
import { injectBasicEventListeners, mergeAttachEventListeners } from '@/functions/eventListeners';


const props = { 
  articleSeed: Object, 
  position: Number, 
  downstream: Object
};
const emits = [ 'trigger', 'mounted' ];
function data() { return {
// state data from articleSeed obj. ---------------
  blocks: [],
  sensorConfigs: {}, // { ...Scales : { ...sensors: { WK, SC }}}
  positionState: null,
  modalConfigs: {}, // { ...Scales : { ...modals } }
// state data made in this component. -------------
  el : {}, states: {},
  childrenCount: null,
  childrenMounted: 0
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
  childrenState() {
    if(this.childrenCount === 0){
      return 1
    }else if(this.childrenCount){
      return this.childrenMounted / this.childrenCount
    }else{
      return 0
    }
  },

  // Fetched Element class and styles -------------
  // based on window scale and component states.
  fetchCSS() {
    try {
      const bundle = this.getCSSbyModal(this);
      const sensorConfigs = getConfigsByScale(this.sensorConfigs, this.getScale)
      if (typeof sensorConfigs['position']['StyleCalc'] !== 'undefined') {
        bundle.style.push(sensorConfigs['position']['StyleCalc'](this.position));
      }
      return bundle
    }
    catch (err) {
      console.error('!error!', `@${this.serial || 'unknown'}`);
      console.error(err);
    }
  },

  serial() {
    return this.articleSeed.serial
  },
};


const methods = {
  tossEvent(payload) {
    this.$emit('trigger', payload);
  },
  childMounted,
  triggerEvent,
  getCSSbyModal,
};


// Make Lists of evnetListeners -------------------
// and inject basic listeners
const listenersList = [];
injectBasicEventListeners(methods, listenersList);


const watch = {
  childrenState(newValue) {
    if(newValue === 1) {
      this.$logg(`-- ${this.serial} mounted --`);
      this.$emit('mounted');
    }
  },

  position(newValue) {
    this.positionState = watchPosition(newValue, this);
  },
  positionState(newValue) {
    positionTrigger(newValue, this);
  }
};


function created() {
  // Inject State Data ----------------------------
  this.blocks = Object.keys(this.articleSeed.nested);
  this.childrenCount = this.blocks.length;
  this.sensorConfigs = this.articleSeed.sensorConfigs;
  this.modalConfigs = this.articleSeed.modalConfigs;
  this.states = this.articleSeed.states;
}


function mounted() { 
  mergeAttachEventListeners(this, listenersList, this.articleSeed.injectTriggers);
}


export default {
  name, props, emits,
  components, 
  data, computed, 
  methods, 
  watch, 
  created, 
  mounted, 
}
</script>