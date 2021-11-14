<template>

  <teleport to='head'>
    <title>IDAS | keemgunn</title>
  </teleport>

  <NavBar/>

  <main v-if="(loadTestField) && (loadState >= loadStateEntries.length)" id="idas">
    <TestField :testBlockList="testBlockList"/>
  </main>

  <main v-if="(!loadTestField) && (loadState >= loadStateEntries.length)" id="idas">
    <Section1 :sectionSeed="configs_bundle.s1"/>
  </main>

</template>



<script>
const name = 'IDAS';
import { mapGetters, mapMutations, mapActions } from 'vuex';
import NavBar from '@/components/NavBar.vue';
import Section1 from '@/components/IDAS/sections/Section1.vue'
import TestField from '@/components/IDAS/IDASblockTestField.vue';


// config file will be imported 
// after this component MOUNTED.
async function importConfigs() {
  try {
    const { wholeBundle, testBlockList } = await import("../components/IDAS/configs/configs_bundle.js")
    return { wholeBundle, testBlockList }
  } catch (err) {
    console.error(err);
  }
}


function data() { return {
  lang: this.$route.params.lang,
  configs_bundle: {},
  testBlockList: {},
  loadState: 0,
  loadStateEntries: [
    '1: configsBundle Loaded',
    '2: content-token loaded'
  ],
  loadTestField: false,
  // showRatio : 0,
}}


const components = {
  NavBar, 
  TestField, 
  Section1,
};


const computed = {
  ...mapGetters('ui',[ 'getFrameSize' ]),
  ...mapGetters('api',[ 'getContentsToken' ]),
  loadComplete() {
    if (this.loadState >= 1) {
      return true
    } else {
      return false
    }
  }
};


const methods = {
  ...mapMutations('', [  ]),
  ...mapActions('', [  ]),
};


const watch = {
  loadState(newValue) {
    this.$logg("IDAS - loadState :", newValue)
  },
  getContentsToken(newValue) {
    if(newValue) {
      this.loadState += 1;
    }
  },
};


function beforeCreate() {
}


function created() {
  importConfigs()
    .then((obj) => {
      this.configs_bundle = obj.wholeBundle;
      this.testBlockList = obj.testBlockList;

      this.loadState += 1;
      this.loadTestField = true;
      
      this.$logg('config_bundled loaded', obj);
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