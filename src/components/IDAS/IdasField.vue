<template>
<div>



</div>
</template>
<script>
import { mapGetters, mapMutations, mapActions } from 'vuex';


function data() { return {

}}


const components = {};
const blockFiles = require.context(
  '@/components/IDAS/blocks/',
  true,
  /^.*\.vue$/
);
for (let file of blockFiles.keys()) {
  const blockName = file.replace('./', '').replace('.vue', '')
  const filepath = '@/components/IDAS/blocks' + file.replace('./', '/')
  components[blockName] = () => import(filepath);
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
  name, 
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