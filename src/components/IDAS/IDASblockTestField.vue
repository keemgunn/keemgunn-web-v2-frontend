<template><div id="idas-block-test-field">

  <component 
    v-for="blockObj of testBlockList"
    :key="blockObj.serial"
    :blockSeed="blockObj"
    :is="blockObj.type"
    @trigger="tossEvent"
  />

</div>
</template>
<script>
const name = 'PAGENAME';
import { mapGetters, mapMutations, mapActions } from 'vuex';
import { defineAsyncComponent } from 'vue';

const props = { testBlockList: Object };
const emits = {};
function data() { return {
  allBlocks: [],

}}


// ---- DYNAMIC COMPONENT IMPORT ------------------
// get filenames in the directory using webpack method.
// for filenames, dynamically import the modules.
const components = {};
const blockFiles = require.context('@/components/IDAS/blocks/', true, /^.*\.vue$/);
for (let file of blockFiles.keys()) {
  const blockName = file.replace('./', '').replace('.vue', '')
  components[blockName] = defineAsyncComponent(() => import("./blocks/" + blockName + ".vue"))
}


const computed = {
  ...mapGetters('',[  ]),
};


const methods = {
  ...mapMutations('', [  ]),
  ...mapActions('', [  ]),
  tossEvent(payload) {
    console.log('tossEvent', payload);
  },
};


const watch = {
};


function beforeCreate() {
}


function created() {


}


function beforeMount() {
}


function mounted() {
  console.log(this.testBlockList);
}


function beforeUpdate() {
}


function updated() {
}


function beforeUnmount() {
}


function unmounted() {
}


export default {
  name, props, emits, 
  components, 
  data, computed, 
  methods, 
  watch, 
  beforeCreate, created, 
  beforeMount, mounted, 
  beforeUpdate, updated, 
  beforeUnmount, unmounted
}
</script>