<template>
<teleport to='head'>
  <title>keemgunn | IDAS</title>
</teleport>

<NavBar/>





<main id="idas">



</main>
</template>

<script>
const name = 'IDAS';
import { mapGetters, mapMutations, mapActions } from 'vuex';
import NavBar from '@/components/NavBar.vue';
// import { NavBar as cls, createFetchers } from '@/assets/styles/classControl';


function data() { return {
  lang: this.$route.params.lang,
  // states: cls.states,
  // classKit: cls.classKit,
  modal: {

  }
}}


const components = {
  NavBar,
};


const computed = {
  ...mapGetters('',[  ]),
  
};
// createFetchers(computed, cls);


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