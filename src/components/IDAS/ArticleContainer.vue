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
    @trigger="tossEvent"
  />

</article>
</template>
<script>
const name = 'ArticleContainer';
import { mapGetters } from 'vuex';
import { defineAsyncComponent } from 'vue';
import { getCSSbyModal, setModalState } from '@/functions/modals';
import { triggerEvent } from '@/functions/triggers';
import { watchPosition } from '@/functions/watchers';
import { injectBasicEventListeners, injectListnerCallbacks, attachEventListeners } from '@/functions/eventListeners';


const props = { 
  articleSeed: Object, 
  position: Number, 
  downstream: Object
};
const emits = [ 'trigger' ];
function data() { return {
// state data from articleSeed obj. ---------------
  blocks: [],
  sensorConfigs: {}, // { ...Scales : { ...sensors: { WK, SC }}}
  modalConfigs: {}, // { ...Scales : { ...modals } }
// state data made in this component. -------------
  el : {}, states: {}
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

  serial() {
    return this.articleSeed.serial
  },
};


const methods = {
  tossEvent(payload) {
    this.$emit('trigger', payload);
  },
  triggerEvent,
  setModalState,
  getCSSbyModal,
};


// Make Lists of evnetListeners -------------------
// and inject basic listeners
const listenersList = [];
injectBasicEventListeners(methods, listenersList);


const watch = {
  position(newValue) {
    watchPosition(newValue, this);
  }
};


function created() {
  // Inject State Data ----------------------------
  this.blocks = Object.keys(this.articleSeed.nested);
  this.sensorConfigs = this.articleSeed.sensorConfigs;
  this.modalConfigs = this.articleSeed.modalConfigs;
  this.states = this.articleSeed.states;

  // Inject Listener Callbacks --------------------
  injectListnerCallbacks(this, listenersList, this.articleSeed.injectTriggers);
}


function mounted() { 
  // Attach DOM Event Listener --------------------
  attachEventListeners(this, this.articleSeed.serial, listenersList);
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