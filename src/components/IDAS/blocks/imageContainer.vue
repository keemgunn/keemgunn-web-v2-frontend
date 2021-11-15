<template><div :id="blockSeed.serial"
  :class="fetchCSS.class" 
  :style="fetchCSS.style"
>

  <img :id="'image-' + blockSeed.serial" :alt="this.contents.alt">
  <p class="typo-caption6" v-html="this.contents.alt"></p>

</div>
</template>
<script>
const name = 'Block_simpleText';
import { mapMutations, mapActions, mapGetters } from 'vuex';
import { getCSSbyModal, setModalState } from '@/functions/modals';
import { triggerEvent } from '@/functions/triggers';
import { injectBasicEventListeners, injectListnerCallbacks, attachEventListeners } from '@/functions/eventListeners';
import { camelToDash } from '@/functions/stringMod';
import { fetchContent } from '@/functions/contentsFetcher';

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
  imgEl : {},
  states: {}, // { modals }
  contents: {},
  link : '',
  subStyles: {
    class: [], style: {}
  }
}}

const computed = {
  ...mapGetters('api', [ 'getContentsURL', 'getCliIP', 'getContentsToken']),
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
  ...mapMutations('', []),
  ...mapActions('', []),
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


  this.contents.url = this.getContentsURL({ 
    src: '/idas/image/' + this.blockSeed.serial,
    type: this.contents.type
  });
}


function mounted() {
  // Attach DOM Event Listener --------------------
  attachEventListeners(this, this.blockSeed.serial, listenersList);

  this.imgEl = document.querySelector('#image-' + this.blockSeed.serial);
  fetchContent(
    this.imgEl,
    this.contents.url,
    this.getCliIP,
    this.getContentsToken
  );


}


export default {
  name, props, emits,
  data, computed, 
  methods, 
  created, 
  mounted
}
</script>