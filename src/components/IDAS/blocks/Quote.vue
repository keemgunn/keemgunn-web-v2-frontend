<template><div :id="blockSeed.serial"
  :class="fetchCSS.class" 
  :style="fetchCSS.style"
>
  <div class="flex f-dir-row gap18">
    <div class="line-flex-ver-3"></div>
    <p v-html="contents.text"></p>
  </div>
</div>
</template>
<script>
const name = 'Block_Quote';
import { mapMutations, mapActions } from 'vuex';
import { getCSSbyModal } from '@/functions/modals';
import { triggerEvent } from '@/functions/triggers';
import { injectBasicEventListeners, injectListnerCallbacks, attachEventListeners } from '@/functions/eventListeners';

const props = { 
  blockSeed: Object, 
  downstream: Object 
};
const emits = [ 'trigger', 'mounted' ];

function data() { return {
// state data from blockSeed obj. ---------------
  modalConfigs: {},
// state data made in this component. -------------
  el : {}, // Injected at created(), used by updaters
  states: {}, // { modals }
  contents: {},
}}

const computed = {
  fetchCSS() {
    try {
      return this.getCSSbyModal(this);
    }
    catch (err) {
      console.error('!error!', `@${this.serial || 'unknown'}`);
      console.error(err);
    }
  },

  serial() {
    return this.blockSeed.serial
  },
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

  // Inject Listener Callbacks --------------------
  injectListnerCallbacks(this, listenersList, this.blockSeed.injectTriggers);
}


function mounted() {
  // Attach DOM Event Listener --------------------
  attachEventListeners(this, this.blockSeed.serial, listenersList);
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