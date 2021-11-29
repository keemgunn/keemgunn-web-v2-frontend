<template>
<div :id="blockSeed.serial"
:class="fetchCSS.class" 
:style="fetchCSS.style">
  Create • Inspire • Contribute &nbsp; Create • Inspire • Contribute &nbsp; Create • Inspire • Contribute &nbsp; Create • Inspire • Contribute &nbsp; Create • Inspire • Contribute &nbsp; Create • Inspire • Contribute &nbsp; Create • Inspire • Contribute
</div>
</template>
<script>
const name = 'Block_simpleText';
import { mapMutations, mapActions, mapGetters } from 'vuex';
import { getCSSbyModal } from '@/functions/modals';
import { triggerEvent } from '@/functions/triggers';
import { injectBasicEventListeners, mergeAttachEventListeners } from '@/functions/eventListeners';
import { camelToDash } from '@/functions/stringMod';

const props = { 
  blockSeed: Object, 
  downstream: Object,
  position: Number
};
const emits = [ 'trigger', 'mounted' ];

function data() { return {
// state data from blockSeed obj. ---------------
  modalConfigs: {},
// state data made in this component. -------------
  el : {}, // Injected at created(), used by updaters
  states: {}, // { modals }

  textColorOffset: [100, 80]
}}

const computed = {
  ...mapGetters('ui', [ 'isDarkmodeOn' ]),
  textColor() {
    if(this.isDarkmodeOn) {
      const l = 50 + this.textColorOffset[0] - (this.downstream.sectionPosition)*this.textColorOffset[1];
      return `hsl(234, 100%, ${l}%)`
    } else {
      const l = 50 - this.textColorOffset[0] + (this.downstream.sectionPosition)*this.textColorOffset[1];
      return `hsl(18, 100%, ${l}%)`
    }
  },

  fetchCSS() {
    try {
      const bundle = this.getCSSbyModal(this);
      bundle.style.push({
        left: `calc( (0.1 - ${this.downstream.sectionPosition}) * 120vw )`,
        color: this.textColor
      });
      return bundle
    }
    catch (err) {
      console.error('!error!', `@${this.serial || 'unknown'}`);
      console.error(err);
    }
  },

  serial() {
    return this.blockSeed.serial
  },

  type() {
    return camelToDash(this.blockSeed.type);
  }
};


const methods = {
  ...mapMutations('', [  ]),
  ...mapActions('', [  ]),
  triggerEvent,
  getCSSbyModal,
};


// Make Lists of evnetListeners -------------------
// and inject basic listeners
const listenersList = [];
injectBasicEventListeners(methods, listenersList);


function created() {
  // Inject State Data ----------------------------
  this.modalConfigs = this.blockSeed.modalConfigs;
  this.states = this.blockSeed.states;
  this.contents = this.blockSeed.contents;
}


function mounted() {
  mergeAttachEventListeners(this, listenersList, this.blockSeed.injectTriggers);
  this.$emit('mounted');
}


export default {
  name, props, emits,
  data, computed, 
  methods, 
  created, 
  mounted
}
</script>