<template><div :id="blockSeed.serial"
  :class="fetchCSS.class" 
  :style="fetchCSS.style"
>

  <div class="image-wrapper" :style="imageWrapperStyle">
    <img :id="'image-' + blockSeed.serial" 
    :class="imgZoomable"
    :alt="this.contents.alt"
    :src="imgPlacholder"
    @click="getLargeImage()"
    >
  </div>

  <p class="typo-caption6" v-if="contents.showAlt" v-html="this.contents.alt"></p>

  <div class="large-image" v-show="isZoom">
    <div class="large-image-header"></div>
    <div class="large-image-wrapper">
      <img :id="'image-zoom-' + blockSeed.serial">
    </div>
    <div class="large-image-footer"></div>
  </div>


</div>
</template>
<script>
const name = 'Block_simpleText';
import { mapMutations, mapActions, mapGetters } from 'vuex';
import { getCSSbyModal } from '@/functions/modals';
import { triggerEvent } from '@/functions/triggers';
import { injectBasicEventListeners, mergeAttachEventListeners } from '@/functions/eventListeners';
import { fetchContent } from '@/functions/contentsFetcher';

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
  imgEl : {},
  states: {}, // { modals }
  contents: {},
  imgPlacholder: require("@/assets/img/placeholder_image.svg"),
  serialPath: '',
  mediaRequestHeader : {},
  preFetched: {},
  isZoom: false,
  zoomEl: {},
  imageWrapperStyle: {
    width: '100%',
    height: 'auto'
  }
}}

const computed = {
  ...mapGetters('api', [ 
    'getContentsURI', 'getCliIP', 'getContentsToken'
  ]),
  ...mapGetters('ui', [ 
    'getContentsSuffix'
  ]),
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
  imgZoomable() {
    if(this.contents.zoom) {
      return 'img-zoomable'
    }
  }
};


const methods = {
  ...mapMutations('', []),
  ...mapActions('', []),
  triggerEvent,
  getCSSbyModal,
  fetchContentAgain() {},
  getLargeImage() {}
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

  this.serialPath = this.getContentsURI('/idas/images/' + this.blockSeed.serial);

  // pre-fetch using lowest resolution image files ...
  fetch(this.serialPath, { headers: {
    cli_ip: this.getCliIP,
    cli_vendor_token: this.getContentsToken,
    ext: this.contents.ext
  }})
  .then(res => res.blob())
  .then(blob => {
    this.preFetched = blob
  })

  // Inject main contents request header ...
  this.mediaRequestHeader = {
    cli_ip: this.getCliIP,
    cli_vendor_token: this.getContentsToken,
    ext: this.contents.ext,
    suffix: this.getContentsSuffix
  }
}


function mounted() {
  this.imgEl = document.querySelector('#image-' + this.blockSeed.serial);
  // const imageWrapperStyle = this.imageWrapperStyle;
  // this.imgEl.addEventListener("load", function() {
  //   const ratio = this.naturalWidth / this.naturalHeight;
  //   imageWrapperStyle.height = `calc( 100% / ${ratio})`
  // });
  fetchContent(this.imgEl, this.serialPath, this.mediaRequestHeader);

  // Attach DOM Event Listener --------------------
  mergeAttachEventListeners(this, listenersList, this.blockSeed.injectTriggers);

  // Inject re-fetch method AFTER first fetch
  this.fetchContentAgain = () => {
    fetchContent(this.imgEl, this.serialPath, this.mediaRequestHeader);
  }

  // Make It Zoom-able --------------------
  if(this.contents.zoom) {
    this.zoomEl = document.querySelector('#image-zoom-' + this.blockSeed.serial)
    this.getLargeImage = () => {
      this.isZoom = true;
      fetch(this.serialPath, { headers: {
        cli_ip: this.getCliIP,
        cli_vendor_token: this.getContentsToken,
        ext: this.contents.ext,
        suffix: '@6x'
      }})
      .then(res => res.blob())
      .then(blob => {
        this.zoomEl.src = URL.createObjectURL(blob);
      });
    }
  }

  this.$emit('mounted');
}


const watch = {
  getContentsSuffix(newValue) {
    this.mediaRequestHeader.suffix = newValue;
    this.fetchContentAgain();
  },
  preFetched(newValue) {
    document.querySelector('#image-' + this.blockSeed.serial).src = URL.createObjectURL(newValue);
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