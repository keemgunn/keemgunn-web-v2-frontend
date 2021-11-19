<template><div :id="blockSeed.serial"
  :class="fetchCSS.class" 
  :style="fetchCSS.style"
>

  <img :id="'image-' + blockSeed.serial" 
  :alt="this.contents.alt"
  :src="imgPlacholder"
  >
  <p class="typo-caption6" v-if="contents.showAlt" v-html="this.contents.alt"></p>

</div>
</template>
<script>
const name = 'Block_simpleText';
import { mapMutations, mapActions, mapGetters } from 'vuex';
import { getCSSbyModal, setModalState } from '@/functions/modals';
import { triggerEvent } from '@/functions/triggers';
import { injectBasicEventListeners, injectListnerCallbacks, attachEventListeners } from '@/functions/eventListeners';
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
  imgPlacholder: require("@/assets/img/placeholder_image.svg"),
  serialPath: '',
  mediaRequestHeader : {}
}}

const computed = {
  ...mapGetters('api', [ 
    'getContentsURI', 'getCliIP', 'getContentsToken'
  ]),
  ...mapGetters('ui', [ 
    'getContentsSuffix'
  ]),
  fetchCSS() {
    const bundle = this.getCSSbyModal(
      this['modalConfigs'],
      this['states']['modals']
    );
    return bundle
  }
};


const methods = {
  ...mapMutations('', []),
  ...mapActions('', []),
  triggerEvent,
  setModalState,
  getCSSbyModal,
  fetchContentAgain() {}
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


  this.serialPath = this.getContentsURI('/idas/images/' + this.blockSeed.serial);
  this.mediaRequestHeader = {
    cli_ip: this.getCliIP,
    cli_vendor_token: this.getContentsToken,
    ext: this.contents.ext,
    suffix: this.getContentsSuffix
  }
}


function mounted() {
  // Attach DOM Event Listener --------------------
  attachEventListeners(this, this.blockSeed.serial, listenersList);
  // Attach DOM Event Listener --------------------
  this.imgEl = document.querySelector('#image-' + this.blockSeed.serial);
  fetchContent(this.imgEl, this.serialPath, this.mediaRequestHeader);
  // Inject re-fetch method AFTER first fetch
  this.fetchContentAgain = () => {
    fetchContent(this.imgEl, this.serialPath, this.mediaRequestHeader);
  }
}


const watch = {
  getContentsSuffix(newValue) {
    this.mediaRequestHeader.suffix = newValue;
    this.fetchContentAgain();
  }
}


export default {
  name, props, emits,
  data, computed, 
  methods, 
  created, 
  mounted,
  watch
}
</script>