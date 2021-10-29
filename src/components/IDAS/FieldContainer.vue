<template>
<div :id="seed.serial">



  <!-- <ArticleContainer v-for="article in "
  
   :seed="articleTest"/> -->

</div>
</template>
<script>
const name = "FieldContainer"
import { mapGetters, mapMutations, mapActions } from 'vuex';
import ArticleContainer from '@/components/IDAS/ArticleContainer.vue';


const states = {
  position: {
    self: 1,
    "s1-f1-a1": 1,
    "s1-f1-a2": 1,
    "s1-f1-a3": 1,
  }
}


const props = {
  seed: Object,
}

function data() { return {
  // state data from seed obj.
  articles: [],
  sensorConfigs: {},
  bindAssets: {},

  // state data made in this component.
  doms: {},
  sensors: {},
  states: states,
}}




const components = { ArticleContainer };




const computed = {
  ...mapGetters('ui',[ 'getScale', 'getStageArea' ]),
};


const methods = {
  ...mapMutations('', [  ]),
  ...mapActions('', [  ]),

  // Chage Sensor Configurations with the new set
  sensorShift(target, payload){
    this["sensors"][target] = this["sensorConfigs"][target][payload]
  },

  // Get Element Progress based on "Stage Area"
  // for Stage Area, see store/ui-frame 
  getElPos(element) {
    return (this.getStageArea.bottom - element.getBoundingClientRect().top) / element.offsetHeight
  },

  // Position Updator for position-state-chain
  // this is the Attachee || Detatchee
  positionUpdater() {
    for (const [key, value] of Object.entries(this.sensors.position)) {
      this["states"]["position"][key] = value ? this.getElPos(this["doms"][key]) : 1
    }
  },

  // Attatch || Detatch positionUpdater -------
  attachpositionUpdater() {
    if(this.sensors.position.self) {
      window.addEventListener('scroll', this.positionUpdater, { passive: true });
    }
  },
  detatchpositionUpdater() {
    window.removeEventListener('scroll', this.positionUpdater);
  }

};


const watch = {

  // Decide sensors to react by Scale ---------
  getScale(newValue) {
    this.sensorShift('position', newValue)
    if(this.sensors.position.self){
      this.attachpositionUpdater();
    }else{
      this.detatchpositionUpdater();
    }

  }

};


function beforeCreate() {
}


function created() { 
  this.$logg(name, this.seed.serial, "~ created ~");
  this.$logg("seed:",this.seed);
  
  // Inject State Data 
  this.articles = Object.keys(this.seed.nested);
  this.sensorConfigs = this.seed.sensorConfigs;
  this.bindAssets = this.seed.bindAssets;

  // Inject Sensors Configurations ------------
  this.sensorShift('position', this.getScale);

}


function beforeMount() {
}


function mounted() { this.$logg(name, this.seed.serial, "~ mounted ~");

  // Inject DOM elements to data() ------------
  this.doms.self = document.querySelector("#"+this.seed.serial);
  for (let article of this.articles) {
    this.doms[article] = document.querySelector("#"+article);
  }
  // console.log(this.getElPos(this.doms.self));

  // Attach intersectObserver to itself -------
  const intersectObserver = new IntersectionObserver((entries) => {
    if(entries[0].isIntersecting) {
      this.attachpositionUpdater()
    }else{
      this.detatchpositionUpdater()
    }
  }, { threshold: [0, 1] })
  intersectObserver.observe(this.doms.self);

}


function beforeUpdate() {
}


function updated() { this.$logg(name, this.seed.serial, "~ updated ~");
}


function beforeUnmount() {
}


function unmounted() {
}


export default {
  name, components, 
  props, data, computed, 
  methods, 
  watch, 
  beforeCreate, created, 
  beforeMount, mounted, 
  beforeUpdate, updated, 
  beforeUnmount, unmounted
}
</script>