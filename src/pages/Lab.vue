<template>
<div></div>




</template>
<script>
const name = 'NavBar';
import { mapGetters, mapMutations, mapActions } from 'vuex';
import { NavBar as cls, createFetchers } from '@/assets/styles/classControl';


function data() { return {
  states: cls.states,
  classKit: cls.classKit,
  modal: {

  }
}}


const components = {

};


const computed = {
  ...mapGetters('',[  ]),
  
};
createFetchers(computed, cls);


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