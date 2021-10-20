<template>
<div></div>



</template>
<script>
import { mapGetters, mapMutations, mapActions } from 'vuex';
import { defineAsyncComponent } from 'vue';

const name = 'block-init';

const props = {}

function data() { return {
}}

  // ---- DYNAMIC COMPONENT IMPORT
const components = {};
  // get filenames in the directory using webpack method.
const blockFiles = require.context(
  '@/components/IDAS/blocks/', true, /^.*\.vue$/
);
  // for filenames, dynamically import the modules.
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
  name, props, 
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