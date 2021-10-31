<template>

  <teleport to='head'>
    <title>IDAS | keemgunn</title>
  </teleport>

  <NavBar/>

  <main v-if="loadComplete" id="idas">
    <Section1 :sectionSeed="configs_bundle.s1"/>
  </main>

  <!-- <div :class="testCompute.class" :style="testCompute.style"></div> -->

</template>



<script>
const name = 'IDAS';
import { mapGetters, mapMutations, mapActions } from 'vuex';
import NavBar from '@/components/NavBar.vue';
import Section1 from '@/components/IDAS/sections/Section1.vue'


// config file will be imported 
// after this component MOUNTED.
async function importConfigs() {
  try {
    return await import("../components/IDAS/configs/configs_bundle.js")
  } catch (err) {
    console.error(err);
  }
}


function data() { return {
  lang: this.$route.params.lang,
  configs_bundle: {},
  loadState: 0,
  
  // showRatio : 0,
}}


const components = {
  NavBar, Section1,
};


const computed = {
  ...mapGetters('ui',[ 'getFrameSize' ]),
  loadComplete() {
    if (this.loadState >= 1) {
      return true
    } else {
      return false
    }
  },
  
  // testCompute() {
  //   return {
  //     class: ["this", "is", "test-compute"],
  //     style: [{'background-color': 'red'}, {'width': '100rem', 'height': '100rem'}]
  //   }
  // }

};


const methods = {
  ...mapMutations('', [  ]),
  ...mapActions('', [  ]),
};


const watch = {
  loadState(newValue) {
    this.$logg("loadState:", newValue)
  }
};


function beforeCreate() {
}


function created() {
  importConfigs("configs_bundle.js")
    .then((obj) => {
      this.configs_bundle = obj.default;
      this.loadState += 1;
    });

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