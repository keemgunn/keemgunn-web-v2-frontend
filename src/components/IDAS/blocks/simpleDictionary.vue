<template><component :is="contents.tag"
:id="blockSeed.serial"
:class="fetchCSS.class" 
:style="fetchCSS.style">
  <div
    v-for="i in recordsCount"
    :key="recordKeys[i]"
    :id="recordKeys[i]"
  >
    <div class="head" v-if="this['contents']['heads'][i]">
      {{" " + this['contents']['heads'][i] + " "}}
    </div>
    <p 
      :class="recordClasses[i]['key']"
      v-html="Object.keys(this['contents']['texts'][i])[0]"
    ></p>
    <div class="saparator" v-if="this['contents']['separators'][i]">
      {{" " + this['contents']['separators'][i] + " "}}
    </div>
    <p 
      :class="recordClasses[i]['value']" 
      v-html="Object.values(this['contents']['texts'][i])[0]"
    ></p>
  </div>
</component>
</template>
<script>
const name = 'Block_simpleDictionary';
import { mapMutations, mapActions } from 'vuex';
import { getCSSbyModal } from '@/functions/modals';
import { triggerEvent } from '@/functions/triggers';
import { injectBasicEventListeners, mergeAttachEventListeners } from '@/functions/eventListeners';
import { camelToDash, spaceToDash } from '@/functions/stringMod';

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

  recordsCount : [],
  recordKeys : [],
  recordClasses: [],
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

  type() {
    return camelToDash(this.blockSeed.type);
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