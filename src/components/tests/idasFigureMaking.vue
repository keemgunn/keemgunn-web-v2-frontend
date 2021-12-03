<template><div id="idas-figure-making">

  <div class="wrapper">
    <component v-for="block in blocks" 
    :is="block" 
    :key="block"
    :blockSeed="{
      serial: `sample-${this.nid()}`,
      type: block
    }"
    />
  </div>


</div>
</template>
<script>
const name = 'idasFigureMaking';
import { mapGetters, mapMutations, mapActions } from 'vuex';
import { defineAsyncComponent } from 'vue';
import { nid } from '@/functions/nanoid';

const props = {};
const emits = {};


// ---- DYNAMIC COMPONENT IMPORT ------------------
// get filenames in the directory using webpack method.
// for filenames, dynamically import the modules.
const components = {};
const figBlocks = require.context('@/components/IDAS/blocks/', true, /^.*\.vue$/).keys().map(item => item.replace('./', '').replace('.vue', '')).filter(item => item.match('idasFig'));
console.log(figBlocks);
for (let file of figBlocks) {
  const compName = file.replace('./', '').replace('.vue', '')
  components[compName] = defineAsyncComponent(() => import("../IDAS/blocks/" + compName + ".vue"))
}


function data() { return {
  blocks: figBlocks,
}}


const computed = {
  ...mapGetters('',[  ]),
};


const methods = {
  ...mapMutations('', [  ]),
  ...mapActions('', [  ]),
  nid,
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
<style lang="scss">
  #idas-figure-making {
    display: flex;
    flex-direction: column;
    padding-top: 20vh;
    align-items: center;
    gap: 40rem;

    .wrapper {
      width: 500rem;
    }


  }



</style>