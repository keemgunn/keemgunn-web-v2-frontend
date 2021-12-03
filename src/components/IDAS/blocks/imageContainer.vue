<template><div :id="blockSeed.serial"
  :class="fetchCSS.class" 
  :style="fetchCSS.style"
>

  <div class="image-wrapper" :style="imageWrapperStyle">
    <img :id="'image-' + blockSeed.serial" 
    :class="imgClass"
    :style="imgStyle"
    :alt="this.contents.alt"
    :src="imgPlacholder"
    @click="getLargeImage()"
    >
  </div>

  <p class="image-alt typo-caption6" v-if="contents.showAlt" v-html="this.contents.alt"></p>

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
  url: '',
  imgPlacholder: require("@/assets/img/placeholder_image.svg"),
  initQueueEntry: {
    'prefetched': false,
    'fullfetched': false,
  },
  isZoom: false,
  zoomEl: {},
  imageWrapperStyle: {
    width: '100%',
    height: 'auto'
  }
}}

const computed = {
  ...mapGetters('api', ['getContentsToken',]),
  ...mapGetters('ui', ['getContentsSuffix']),
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
  imgClass() {
    try {
      return [
        this.contents.zoom ? 'img-zoomable' : ''
      ]
    } catch(err) {
      console.error(`!error! ${this.serial} :`, err);
    }
  },
  imgStyle() {
    try {
      return [{
        border: this.contents.border
      }]
    } catch(err) {
      console.error(`!error! ${this.serial} :`, err);
    }
  },
};


const methods = {
  ...mapMutations('moderator', [
    'addToInitQueue', 
    'commitInitQueue',
  ]),
  ...mapActions('api', [
    'fetchImage',
  ]),

  serialize(str) {
    return `${this.serial}_${str}`
  },
  isFullfilled(task) {
    return this.initQueueEntry[task]
  },
  resolveQueue(task) {
    this.initQueueEntry[task] = true;
    this.commitInitQueue({pageName: 'idas', taskSerial: this.serialize(task)});
  },

  async prefetch(){
    this.fetchImage({
      element: this.imgEl,
      url: this.url,
      ext: this.contents.ext,
      suffix: '@_75x'
    })
    .then(result => {
      this.resolveQueue('prefetched');
      if (!result) {
        console.warn(`!warning! prefetching image failed @${this.serial}`);
      }
      this.fullfetch();
    })
  },

  async fullfetch(){
    this.fetchImage({
      element: this.imgEl,
      url: this.url,
      ext: this.contents.ext,
      suffix: this.getContentsSuffix
    })
    .then(result => {
      this.resolveQueue('fullfetched');
      if (!result) {
        console.warn(`!warning! fullfetching image failed @${this.serial}`);
      }
    })
  },

  triggerEvent,
  getCSSbyModal,
  getLargeImage(){},
};


// Make Lists of evnetListeners -------------------
// and inject basic listeners
const listenersList = [];
injectBasicEventListeners(methods, listenersList);


function created() {
  for (const taskSerial of Object.keys(this.initQueueEntry)) {
    this.addToInitQueue({ pageName: 'idas', taskSerial: this.serialize(taskSerial) });
  }

  // Inject State Data ----------------------------
  this.modalConfigs = this.blockSeed.modalConfigs;
  this.states = this.blockSeed.states;
  this.contents = this.blockSeed.contents;

  // revision ---- 
  // this.url = '/idas/images/' + this.blockSeed.serial;
  this.url = this.blockSeed.serial;
}


function mounted() {
  this.imgEl = document.querySelector('#image-' + this.blockSeed.serial);

  // Attach DOM Event Listener --------------------
  mergeAttachEventListeners(this, listenersList, this.blockSeed.injectTriggers);

  // Make It Zoom-able --------------------
  if(this.contents.zoom) {
    this.zoomEl = document.querySelector('#image-zoom-' + this.blockSeed.serial)
    this.getLargeImage = () => {
      this.isZoom = true;
      this.fetchImage({
        element: this.imgEl,
        url: this.url,
        ext: this.contents.ext,
        suffix: '@6x'
      });
    };
  }

  this.$emit('mounted');
  if (this.getContentsToken) {
    this.prefetch();
  }
}


const watch = {
  getContentsToken(newValue) {
    if(newValue) {
      this.prefetch();
    }
  },

  getContentsSuffix(newValue) {
    this.fetchImage({
      element: this.imgEl,
      url: this.url,
      ext: this.contents.ext,
      suffix: newValue
    });
  },
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