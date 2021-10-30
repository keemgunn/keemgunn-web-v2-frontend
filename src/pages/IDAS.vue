<template>

  <teleport to='head'>
    <title>IDAS | keemgunn</title>
  </teleport>

  <NavBar/>

  <main v-if="loadComplete" id="idas">
    <Section1 :sectionSeed="configs_bundle.s1"/>
  </main>

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
};


const methods = {
  ...mapMutations('', [  ]),
  ...mapActions('', [  ]),
};


const watch = {
};


function beforeCreate() {
}


function created() { this.$logg(name, "~ created ~");
  importConfigs("configs_bundle.js")
    .then((obj) => {
      this.configs_bundle = obj.default;
      this.$logg(this.configs_bundle);
      this.loadState += 1;
      this.$logg("loadState:", this.loadState);
    });

}


function beforeMount() {
}


function mounted() { this.$logg(name, "~ mounted ~");
  this.$logg("loadState:", this.loadState);

}


function beforeUpdate() {
}


function updated() { this.$logg(name, "~ updated ~");
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