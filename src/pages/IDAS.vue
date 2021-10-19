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

function data() { return {
  lang: this.$route.params.lang,

}}


const components = {
  NavBar, Section1
};


const computed = {
  ...mapGetters('ui',[ 'getFrameSize' ]),
  
};


const methods = {
  ...mapMutations('', [  ]),
  ...mapActions('', [  ]),

  onScroll() {
    console.log('scroll');
  }


  // attachScrollDetector() {

  // }

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
  console.log('getFrameSize:',this.getFrameSize);

  let element = document.querySelector("#keyBlock");

  console.log(element.getBoundingClientRect());



  const observer = new IntersectionObserver((entries) => {
    let ent = entries[0]
    if (ent.intersectionRatio < 0.2) {
      if(ent.isIntersecting) {
        console.log('observer - start');
      }else{
        console.log('observer - end');
      }
    } 
  }, { threshold: [0, 1] });

  observer.observe(element);

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