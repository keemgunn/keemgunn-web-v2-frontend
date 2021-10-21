<template>
<div :id="name">

  <p class="typo-body2">{{states.position}}</p>
  <div id="s1-f1-a1" class="fieldTest00"></div>
  <div id="s1-f1-a2" class="fieldTest00"></div>
  <div id="s1-f1-a3" class="fieldTest00"></div>

  <ArticleContainer :seed="articleTest"/>

</div>
</template>
<script>
import { mapGetters, mapMutations, mapActions } from 'vuex';
import ArticleContainer from '@/components/IDAS/ArticleContainer.vue';

const articles = ["s1-f1-a1", "s1-f1-a2", "s1-f1-a3"]

const sensorConfigs = {
  position: {
    XXS: {
      self: true,
      "s1-f1-a1": true,
      "s1-f1-a2": true,
      "s1-f1-a3": true,
    },
    XS: {
      self: true,
      "s1-f1-a1": true,
      "s1-f1-a2": true,
      "s1-f1-a3": true,
    },
    S: {
      self: true,
      "s1-f1-a1": true,
      "s1-f1-a2": true,
      "s1-f1-a3": true,
    },
    M: {
      self: true,
      "s1-f1-a1": false,
      "s1-f1-a2": true,
      "s1-f1-a3": true,
    },
    L: {
      self: false,
      "s1-f1-a1": true,
      "s1-f1-a2": true,
      "s1-f1-a3": true,
    },
    XL: {
      self: true,
      "s1-f1-a1": true,
      "s1-f1-a2": true,
      "s1-f1-a3": true,
    },
    XXL: {
      self: true,
      "s1-f1-a1": true,
      "s1-f1-a2": true,
      "s1-f1-a3": true,
    },
  }
}

const states = {
  position: {
    self: 1,
    "s1-f1-a1": 1,
    "s1-f1-a2": 1,
    "s1-f1-a3": 1,
  }
}

import {s1_f1_a1} from '@/components/IDAS/configs/articles/articles_0_XS';





const recievedSeedExample = {
  _type: "field",
  serial: "s1-f1",
  name: "field name example",
  bindAssets: {

    XXS: {
      sensors:{
        position: true,
      },

      classKit: {
        base: ['field-type-a'],
        mouseover: {
          true: 'mouse-over'
        },
        touched: {
          true: 'touched'
        },
        something: {
          on: "something-on"
        },
      },

      styleKit: {
        base: [{
          "margin" : "0 0",
          "padding" : "0 0",
          "grid-template-columns": 'repeat(6, 1fr)',
          "gap": "10rem 10rem",
          "width": ""
        }],
        mouseover: {
          true: {
            "opacity": "0.6"
          }
        },
        touched: {
          true: {
            "opacity": "0.6"
          }
        },
        something: {
          on: {
            "color": "red"
          }
        },
      }
    },
    // XS : { ... }
    // S : { ... }
    // M : { ... }
    // L : { ... }
    // XL : { ... }
    // XXL : { ... }

  },
  nested: []
}

console.log(recievedSeedExample);
























const name = "FieldContainer"

const props = {
  name: { type: String, default: "no-field-name" }
}

function data() { return {
  articles: articles,
  doms: {},
  sensors: {},
  sensorConfigs: sensorConfigs,
  states: states,

  articleTest: s1_f1_a1
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

  // Inject Sensors Configurations ------------
  this.sensorShift('position', this.getScale);


}


function beforeMount() {
}


function mounted() {

  // Inject DOM elements to data() ------------
  this.doms.self = document.querySelector("#"+this.name);
  for (let article of articles) {
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


function updated() {
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