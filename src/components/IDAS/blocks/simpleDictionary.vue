<template><div :id="blockSeed.serial"
  :class="fetchCSS.class" 
  :style="fetchCSS.style"
>

  <div
    v-for="i in recordsCount"
    :key="recordKeys[i]"
    :id="recordKeys[i]"
  >
    <div class="head" v-if="this['contents']['heads'][i]">
      {{" " + this['contents']['heads'][i] + " "}}
    </div>

    <p :class="recordClasses[i]['key']">
      {{Object.keys(this['contents']['texts'][i])[0]}}
    </p>

    <div class="saparator" v-if="this['contents']['separators'][i]">
      {{" " + this['contents']['separators'][i] + " "}}
    </div>

    <p :class="recordClasses[i]['value']" 
    @click="goToLink(this['contents']['links'][i])">
      {{Object.values(this['contents']['texts'][i])[0]}}
    </p>
  </div>

</div>
</template>
<script>
const name = 'Block_simpleDictionary';
import { mapMutations, mapActions } from 'vuex';
import { getCSSbyModal, setModalState } from '@/functions/modals';
import { triggerEvent, goToLink } from '@/functions/triggers';
import { injectBasicEventListeners, injectListnerCallbacks, attachEventListeners } from '@/functions/eventListeners';
import { camelToDash, spaceToDash } from '@/functions/stringMod';

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

  recordsCount : [],
  recordKeys : [],
  recordClasses: [],
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

  goToLink
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

  for (const i in this.contents.texts) {
    this.recordsCount.push(i)
    const recordID = this.blockSeed.serial + '-' + String(i) + '-' + spaceToDash(Object.keys(this.contents.texts[i])[0]);
    this.recordKeys.push(recordID);
    this.recordClasses.push({
      key : [
        'dictionary-key',
        ...this.contents.keyClass
      ], 
      value : [
        'dictionary-value',
        ...this.contents.valueClass
      ]
    });
  }

  for (const i in this.contents.links) {
    if(this.contents.links[i]) {
      this['recordClasses'][i]['value'].push('link');
    }
  }

  console.log(this.recordClasses);
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