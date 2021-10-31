<template><div :id="fieldSeed.serial"
  :class="getCSS.class" 
  :style="getCSS.style"
  @trigger="conveyEvent" 
>

  <ArticleContainer v-for="article of Object.keys(fieldSeed.nested)"
    :key="article"
    :articleSeed="fieldSeed['nested'][article]"
    :position="states['sensors']['position'][article]"
    @trigger="conveyEvent"
  />


</div>
</template>
<script>
const name = "FieldContainer"
import { mapGetters, mapMutations, mapActions } from 'vuex';
import ArticleContainer from '@/components/IDAS/ArticleContainer.vue';
import modalFetcher from '@/functions/modalFetcher';


const props = { fieldSeed: Object };
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
}}


const components = { ArticleContainer };


const computed = {
  ...mapGetters('ui',[ 'getScale', 'getStageArea' ]),

  // Fetched Element class and styles -------------
  // based on window scale and component states.
  getCSS() {
    this.states;
    const bundle = this.getCSSbyState(
      this['modalConfigs'][this.getScale],
      this['states']['modals']
    );
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

  // Change Component Modal States. ---------------
  // Called by EventListener Callbacks.
  setModalState(name='modal-name', payload){
    this.$logg(this.fieldSeed.serial, ': setModalState :', name, payload);
    if (typeof this['states']['modals'][name] !== 'undefined') {
      this['states']['modals'][name] = (payload === 'toggle') ? !this['states']['modals'][name] : payload;
    }
  },

  // CSS Fetch Method will be injected in here. ---
  // Since computed() properties are read-only, 
  // Injection has to apply to method() property.
  getCSSbyState() {},

  // Chage Sensor Configurations by Scale ---------
  sensorShift(target, scale){
    this["sensorsActive"][target] = this["sensorConfigs"][scale][target];
    console.log(this["sensorsActive"]);
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
  }

};


function beforeCreate() {  }


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

  // Inject Modal Fetcher -------------------------
  this.getCSSbyState = modalFetcher(this);

}


function beforeMount() {  }


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
}


function beforeUpdate() {  }
function updated() {  }
function beforeUnmount() {  }
function unmounted() {  }
export default {
  name, components, 
  props, emits, 
  data, computed, 
  methods, 
  watch, 
  beforeCreate, created, 
  beforeMount, mounted, 
  beforeUpdate, updated, 
  beforeUnmount, unmounted
}
</script>