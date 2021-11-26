<template><div
  :id="fieldSeed.serial"
  :class="fetchCSS.class" 
  :style="fetchCSS.style"
>

  <ArticleContainer v-for="article of Object.keys(fieldSeed.nested)"
    :key="article"
    :articleSeed="fieldSeed['nested'][article]"
    :position="states['sensors']['position'][article]"
    :downstream="downstream" 
    @trigger="tossEvent"
    @mounted="childMounted(this)"
  />

</div>
</template>
<script>
const name = "FieldContainer"
import { mapGetters } from 'vuex';
import ArticleContainer from '@/components/IDAS/ArticleContainer.vue';
import { getConfigsByScale, getCSSbyModal } from '@/functions/modals';
import { childMounted, triggerEvent } from '@/functions/triggers';
import { watchPosition } from '@/functions/watchers';


const props = { fieldSeed: Object, downstream: Object };
const emits = [ 'trigger', 'mounted' ];
function data() { return {
  articles: [],
  sensorConfigs: {}, // { ...Scales : { ...sensors } }
  modalConfigs: {}, // { ...Scales : { ...modals } }
  doms: {},
  states: {},
  sensorsActive: {},
  loadStateEntries: {
    '1_filedSeed-injected': false,
    '2_positionSensor-initiated': false,
    '3_all-children-mounted': false
  },
  childrenCount: null,
  childrenMounted: 0
}}


const components = { ArticleContainer };
const computed = {
  ...mapGetters('ui',[ 'getScale', 'getStageArea' ]),
  childrenState() {
    if(this.childrenCount === 0){
      return 1
    }else if(this.childrenCount){
      return this.childrenMounted / this.childrenCount
    }else{
      return 0
    }
  },
  loadState() {
    let loadDone = 0;
    let loadTasks = 0;
    for (const isDone of Object.values(this.loadStateEntries)) {
      loadTasks += 1;
      if(isDone) loadDone += 1;
    }
    return (loadDone / loadTasks)
  },

  // Fetched Element class and styles -------------
  // based on window scale and component states.
  fetchCSS() {
    try {
      const bundle = this.getCSSbyModal(this);
      const sensorConfigs = getConfigsByScale(this.sensorConfigs, this.getScale);
      if (typeof sensorConfigs['position']['self']['StyleCalc'] !== 'undefined') {
        bundle.style.push(sensorConfigs['position']['self']['StyleCalc'](this.position));
      }
      return bundle
    }
    catch (err) {
      console.error('!error!', `@${this.serial || 'unknown'}`);
      console.error(err);
    }
  },

  serial() {
    return this.fieldSeed.serial
  },

  position() {
    if(this.loadStateEntries['1_filedSeed-injected']) {
      return this.states.sensors.position.self
    }else {
      return 1
    }
  },
};


const methods = {
  tossEvent(payload) {
    this.$emit('trigger', payload);
  },
  childMounted,
  triggerEvent,
  getCSSbyModal,

  // Chage Sensor Configurations by Scale ---------
  sensorShift(target, scale){
    const sensorConfigs = getConfigsByScale(this.sensorConfigs, scale);
    this["sensorsActive"][target] = sensorConfigs[target];
    this["sensorsActive"][target]['self'] = Object.keys(sensorConfigs[target]['self']).length !== 0;
  },

  // Get Element Progress based on "Stage Area"
  // for Stage Area, see store/ui-frame 
  getElPos(element) {
    const top = element.getBoundingClientRect().top;
    const height = element.getBoundingClientRect().height;
    return (this.getStageArea.bottom - top) / height
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
    window.addEventListener('scroll', this.positionUpdater, { passive: true });
  },
  detatchpositionUpdater() {
    window.removeEventListener('scroll', this.positionUpdater);
  }
};


const watch = {
  childrenState(newValue) {
    if(newValue === 1) {
      this.$logg(`-- ${this.serial} mounted --`);
      this.$emit('mounted');
      this.loadStateEntries['3_all-children-mounted'] = true;
    }
  },

  loadState(newValue) {
    console.log('loadState:', this.serial, newValue);
    if(newValue === 1) {
      this.positionUpdater();
      setTimeout(this.positionUpdater, 250);
    }
  },

  getScale(newValue) {
    this.sensorShift('position', newValue)
    this.positionUpdater();
  },

  position(newValue) {
    watchPosition(newValue, this);
  },
};


function created() { 
  this.$logg(
    "Field Created", 
    this.fieldSeed.serial, 
    this.fieldSeed
  );
  
  // Inject State Data ----------------------------
  this.articles = Object.keys(this.fieldSeed.nested);
  this.childrenCount = this.articles.length;
  this.sensorConfigs = this.fieldSeed.sensorConfigs;
  this.modalConfigs = this.fieldSeed.modalConfigs;
  this.states = this.fieldSeed.states;

  // Inject Sensors Configurations ----------------
  this.sensorShift('position', this.getScale);

  this.loadStateEntries['1_filedSeed-injected'] = true;
}


function mounted() {
  // Inject DOM elements to data() ----------------
  this.doms.self = document.querySelector("#"+this.serial)
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

  this.loadStateEntries['2_positionSensor-initiated'] = true;
}


export default {
  name, components, 
  props, emits, 
  data, computed, 
  methods, 
  watch, 
  created, 
  mounted
}
</script>