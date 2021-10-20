<template>
<div :id="name">

  <p class="typo-body2">{{states.position}}</p>
  <div id="s1f1a1" class="fieldTest00"></div>
  <div id="s1f1a2" class="fieldTest00"></div>
  <div id="s1f1a3" class="fieldTest00"></div>

</div>
</template>
<script>
import { mapGetters, mapMutations, mapActions } from 'vuex';


const articles = ['s1f1a1', 's1f1a2', 's1f1a3']

const sensorConfigs = {
  position: {
    XS: {
      s1f1a1: true,
      s1f1a2: true,
      s1f1a3: true,
    },
    M: {
      s1f1a1: false,
      s1f1a2: true,
      s1f1a3: true,
    },
    L: {
      s1f1a1: true,
      s1f1a2: true,
      s1f1a3: true,
    },
    XL: {
      s1f1a1: true,
      s1f1a2: true,
      s1f1a3: true,
    },
  }
}

const states = {
  position: {
    self: 1,
    s1f1a1: 1,
    s1f1a2: 1,
    s1f1a3: 1,
  }
}





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
}}




const components = {};




const computed = {
  ...mapGetters('ui',[ 'getScale', 'getStageArea' ]),
};


const methods = {
  ...mapMutations('', [  ]),
  ...mapActions('', [  ]),

  // Chage Sensor Configurations with the new set
  sensorShift(target, payload){
    this["sensors"][target] = this["sensorConfigs"][target][payload]
    if (target === 'position') {
      this.sensors.position.self = true;
    }
  },

  // Get Element Progress based on "Stage Area"
  // for Stage Area, see store/ui-frame 
  getElementProgress(element) {
    return (this.getStageArea.bottom - element.getBoundingClientRect().top) / element.offsetHeight
  },

  // Position Updator for position-state-chain
  // this is the Attachee || Detatchee
  positionUpdator() {
    for (const [key, value] of Object.entries(this.sensors.position)) {
      this["states"]["position"][key] = value ? this.getElementProgress(this["doms"][key]) : 1
    }
  },

  // Attatch || Detatch positionUpdator -------
  attachPositionUpdator() {
    window.addEventListener('scroll', this.positionUpdator, { passive: true });
  },
  detatchPositionUpdator() {
    window.removeEventListener('scroll', this.positionUpdator);
  }



};


const watch = {

  // Decide sensors to react by Scale ---------
  getScale(newValue) {
    this.sensorShift('position', newValue)
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
  console.log(this.getElementProgress(this.doms.self));

  // Attach intersectObserver to itself -------
  const intersectObserver = new IntersectionObserver((entries) => {
    let ent = entries[0];
    if(ent.isIntersecting) {
      this.attachPositionUpdator()
    }else{
      this.detatchPositionUpdator()
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