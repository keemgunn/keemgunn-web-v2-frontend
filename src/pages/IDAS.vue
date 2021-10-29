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
import { mapGetters, mapMutations, mapActions } from 'vuex';

// config file will be imported 
// after this component MOUNTED.
async function importConfigs() {
  try {
    return await import("../components/IDAS/configs/configs_bundle.js")
  } catch (err) {
    console.error(err);
  }
}






const name = 'IDAS';

import NavBar from '@/components/NavBar.vue';
import Section1 from '@/components/IDAS/sections/Section1.vue'

function data() { return {
  lang: this.$route.params.lang,
  wholeBundle: {},
  loadState: 0,
  
  // showRatio : 0,
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
  importConfigs("configs_bundle.js")
    .then((obj) => {
      this.wholeBundle = obj.default;
      this.$logg(this.wholeBundle);
      this.loadState += 1;
      this.$logg("loadState:", this.loadState);
    });

}


function beforeMount() {
}


function mounted() {
  this.$logg("loadState:", this.loadState);

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