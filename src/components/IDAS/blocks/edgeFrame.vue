<template><div :id="blockSeed.serial"
  :class="fetchCSS.class" 
  :style="fetchCSS.style"
>
</div>
</template>
<script>
const name = 'Block_edgeFrame';
import { mapMutations, mapActions } from 'vuex';
import { getCSSbyModal, setModalState } from '@/functions/modals';
import { triggerEvent } from '@/functions/triggers';
import { injectBasicEventListeners, injectListnerCallbacks, attachEventListeners } from '@/functions/eventListeners';
import { camelToDash } from '@/functions/stringMod';

const props = { 
  blockSeed: Object, 
  downstream: Object 
};
const emits = [ 'trigger' ];

function data() { return {
// state data from blockSeed obj. ---------------
  modalConfigs: {},
// state data made in this component. -------------
  el : {}, // Injected at created(), used by updaters
  states: {}, // { modals }
  contents: {},
  subStyles: {
    class: [], style: {}
  }
}}

const computed = {
  fetchCSS() {
    const bundle = this.getCSSbyModal(
      this['modalConfigs'],
      this['states']['modals']
    );
    return bundle
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
  setModalState,
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

  // Inject Listener Callbacks --------------------
  injectListnerCallbacks(this, listenersList, this.blockSeed.injectTriggers);
}


function mounted() {
  // Attach DOM Event Listener --------------------
  attachEventListeners(this, this.blockSeed.serial, listenersList);
}


export default {
  name, props, emits,
  data, computed, 
  methods, 
  created, 
  mounted
}
</script>