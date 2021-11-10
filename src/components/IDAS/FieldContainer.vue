<template><div :id="fieldSeed.serial"
  :class="fetchCSS.class" 
  :style="fetchCSS.style"
>

  <ArticleContainer v-for="article of Object.keys(fieldSeed.nested)"
    :key="article"
    :articleSeed="fieldSeed['nested'][article]"
    :position="states['sensors']['position'][article]"
    :downstream="downstream" 
    @trigger="tossEvent"
  />

</div>
</template>
<script>
const name = "FieldContainer"
import { mapGetters } from 'vuex';
import ArticleContainer from '@/components/IDAS/ArticleContainer.vue';
import { getCSSbyModal, setModalState } from '@/functions/modals';
import { triggerEvent } from '@/functions/triggers';
import { watchPosition } from '@/functions/watchers';


const props = { fieldSeed: Object, downstream: Object };
const emits = [ 'trigger' ];
function data() { return {
// state data from fieldSeed obj. -----------------
  articles: [], // Array of String
  sensorConfigs: {}, // { ...Scales : { ...sensors } }
  modalConfigs: {}, // { ...Scales : { ...modals } }
// state data made in this component. -------------
  doms: {}, // Injected at created(), used by updaters
  sensorsActive: {}, // Dynamically injected from sensorConfigs
  states: {}, // {modals, sensors}
// LOAD STATE
  loadState: 0
}}
// Load States => 0: initial | 1: created | 2: mounted


const components = { ArticleContainer };
const computed = {
  ...mapGetters('ui',[ 'getScale', 'getStageArea' ]),

  // Fetched Element class and styles -------------
  // based on window scale and component states.
  fetchCSS() {
    const bundle = this.getCSSbyModal(
      this['modalConfigs'][this.getScale],
      this['states']['modals']
    );

    if (typeof this['sensorConfigs'][this.getScale]['position']['self']['StyleCalc'] !== 'undefined') {
      bundle.style.push(this['sensorConfigs'][this.getScale]['position']['self']['StyleCalc'](this.position));
    }

    return bundle
  },

  serial() {
    return this.fieldSeed.serial
  },

  position() {
    if (this.loadState >= 2) {
      return this.states.sensors.position.self
    } else {
      return 1
    }
  }
};


const methods = {
  tossEvent(payload) {
    this.$emit('trigger', payload);
  },
  triggerEvent,
  setModalState,
  getCSSbyModal,

  // Chage Sensor Configurations by Scale ---------
  sensorShift(target, scale){
    this["sensorsActive"][target] = this["sensorConfigs"][scale][target];
    this["sensorsActive"][target]['self'] = Object.keys(this["sensorConfigs"][scale][target]).length !== 0;
  },

  // Get Element Progress based on "Stage Area"
  // for Stage Area, see store/ui-frame 
  getElPos(element) {
    return (this.getStageArea.bottom - element.getBoundingClientRect().top) / element.offsetHeight
  },

  // Position Updator for position-state-chain
  // this is the Attachee || Detatchee
  positionUpdater() {
    for (const [key, value] of Object.entries(this.sensorsActive.position)) {
      if (typeof this["states"]["sensors"]["position"][key] !== 'undefined') {
        this["states"]["sensors"]["position"][key] = value ? this.getElPos(this["doms"][key]) : 1
      }
    }
  },

  // Attatch || Detatch positionUpdater -----------
  attachpositionUpdater() {
    if(this.sensorsActive.position.self) {
      window.addEventListener('scroll', this.positionUpdater, { passive: true });
    }
  },
  detatchpositionUpdater() {
    window.removeEventListener('scroll', this.positionUpdater);
  }
};


const watch = {
  // Decide sensorsActive by Scale -------------
  getScale(newValue) {
    this.sensorShift('position', newValue)
    if(this.sensorsActive.position.self){
      this.attachpositionUpdater();
    }else{
      this.detatchpositionUpdater();
    }
    this.positionUpdater();
  },

  position(newValue) {
    watchPosition(newValue, this);
  }
};


function created() { 
  this.$logg(
    "Field Created", 
    this.fieldSeed.serial, 
    this.fieldSeed
  );
  
  // Inject State Data ----------------------------
  this.articles = Object.keys(this.fieldSeed.nested);
  this.sensorConfigs = this.fieldSeed.sensorConfigs;
  this.modalConfigs = this.fieldSeed.modalConfigs;
  this.states = this.fieldSeed.states;

  // Inject Sensors Configurations ----------------
  this.sensorShift('position', this.getScale);

  this.loadState += 1;
}


function mounted() {
  // Inject DOM elements to data() ----------------
  this.doms.self = document.querySelector("#"+this.fieldSeed.serial)
  for (let article of this.articles) {
    this.doms[article] = document.querySelector("#"+article);
  }

  // Attach intersectObserver to itself -----------
  const intersectObserver = new IntersectionObserver((entries) => {
    if(entries[0].isIntersecting) {
      this.attachpositionUpdater()
    }else{
      this.detatchpositionUpdater()
    }
  }, { threshold: [0, 1] })
  intersectObserver.observe(this.doms.self);

  // initialize position state --------------------
  this.positionUpdater();
  this.loadState += 1;
}


export default {
  name, components, 
  props, emits, 
  data, computed, 
  methods, 
  watch, 
  created, 
  mounted, 
}
</script>