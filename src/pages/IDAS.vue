<template>
<teleport to='head'>
  <title>keemgunn | IDAS</title>
</teleport>
<NavBar/>
<main id="idas">

<Section1/>

<IdasArticle/>

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

import IdasArticle from '@/components/IDAS/IdasArticle.vue'


// async function moduleLoad(name) {
//   return await import(`@/pages/test/objects/${name}`)
// }




function data() { return {
  lang: this.$route.params.lang,
  showRatio : 0,
}}


const components = {
  NavBar, Section1,
  IdasArticle
};


const computed = {
  ...mapGetters('ui',[ 'getFrameSize' ]),
  
};


const methods = {
  ...mapMutations('', [  ]),
  ...mapActions('', [  ]),

  onScroll(target) {
    console.log(target);
  },


  attachScrollDetector(target) {
    window.addEventListener('scroll', this.onScroll(target));
  },
  detachScrollDetector(target) {
    window.removeEventListener('scroll', this.onScroll(target));
  }

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
        this.attachScrollDetector()
      }else{
        console.log('observer - end');
        this.detachScrollDetector()
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