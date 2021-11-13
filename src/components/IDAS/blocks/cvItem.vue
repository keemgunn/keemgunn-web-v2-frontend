<template><div :id="blockSeed.serial"
  :class="fetchCSS.class" 
  :style="fetchCSS.style">
  <div class="flex f-dir-row gap22">
    <div class="line-flex-ver-3"></div>
    <div class="flex f-dir-col gap18 w100">
      <p class="typo-mark5--light">{{contents.title}}</p>
      <div v-for="record in contents.records"
      :key="record.name"
      class="flex f-dir-col gap6">
        <div class="flex f-dir-row f-js-cont-space f-al-item-baseline f-wrap rgap6">
          <p class="typo-caption4">{{record.name}}</p>
          <div class="flex f-dir-row f-js-cont-end f-al-item-baseline gap5">
            <p class="typo-caption5">{{record.time}}</p>
            <p v-if="record.expected" class="typo-caption6">(expected)</p>
          </div>
        </div>
        <div class="line-flex-hor-1"></div>
        <p class="typo-body3">{{record.description}}</p>
      </div>
    </div>
  </div>
</div>
</template>
<script>
const name = 'Block_simpleDictionary';
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
  },

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