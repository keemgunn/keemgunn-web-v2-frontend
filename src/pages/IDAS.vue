<template>
<teleport to='head'>
  <title>keemgunn | IDAS</title>
</teleport>
<NavBar/>
<main id="idas">

<Section1/>


<div class="scrollTest"></div>
<div class="scrollTest"></div>
<div class="scrollTest"></div>
<div class="scrollTest"></div>
<div class="scrollTest"></div>
<div class="scrollTest"></div>
<div class="scrollTest"></div>
<div class="scrollTest"></div>
<div id="keyBlock" class="keyBlock"></div>
<div class="scrollTest"></div>
<div class="scrollTest"></div>
<div class="scrollTest"></div>
<div class="scrollTest"></div>
<div class="scrollTest"></div>
<div class="scrollTest"></div>
<div class="scrollTest"></div>




</main>
</template>

<script>
const name = 'IDAS';
import { mapGetters, mapMutations, mapActions } from 'vuex';
import NavBar from '@/components/NavBar.vue';
import Section1 from '@/components/IDAS/Section1.vue'




// async function moduleLoad(name) {
//   return await import(`@/pages/test/objects/${name}`)
// }




function data() { return {
  lang: this.$route.params.lang,
  showRatio : 0,
}}


const components = {
  NavBar, Section1,
};


const computed = {
  ...mapGetters('ui',[ 'getFrameSize' ]),
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