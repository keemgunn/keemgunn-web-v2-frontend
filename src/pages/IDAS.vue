<template>

  <teleport to='head'>
    <title>IDAS | keemgunn</title>
  </teleport>

  <NavBar/>

  <main v-if="loadState === 1" id="idas">
    <component :is="'Section1'" :sectionSeed="configs_bundle.s1"/>



  </main>

</template>



<script>
const name = 'IDAS';
import { mapGetters, mapMutations, mapActions } from 'vuex';
import { defineAsyncComponent } from 'vue';
import NavBar from '@/components/NavBar.vue';


async function importConfigs() {
  try {
    const { wholeBundle } = await import("../components/IDAS/configs/configs_bundle.js")
    return { wholeBundle }
  } catch (err) {
    console.error(err);
  }
}


const components = { NavBar };
const sectionFiles = require.context('@/components/IDAS/sections/', true, /^.*\.vue$/);
for (let file of sectionFiles.keys()) {
  const sectionName = file.replace('./', '').replace('.vue', '');
  components[sectionName] = defineAsyncComponent(() => import("../components/IDAS/sections/" + sectionName + ".vue" ))
}


function data() { return {
  lang: this.$route.params.lang,
  configs_bundle: {},
  testBlockList: {},
  loadStateEntries: {
    '1_configsBundle-loaded': false,
    '2_contentsToken-loaded': false,
  },
}}


const computed = {
  ...mapGetters('ui',[ 'getFrameSize' ]),
  ...mapGetters('api',[ 'getContentsToken' ]),
  loadState() {
    let loadDone = 0;
    let loadTasks = 0;
    for (const isDone of Object.values(this.loadStateEntries)) {
      loadTasks += 1;
      if(isDone) loadDone += 1;
    }
    return loadDone / loadTasks
  }
};


const methods = {
  ...mapMutations('', [  ]),
  ...mapActions('', [  ]),
};


const watch = {
  loadState(newValue) {
    this.$logg("IDAS - loadState :", newValue)
    if (newValue === 1) {
      console.log('IDAS - loadState-fullfilled : renders main element');
    }
  },
  getContentsToken(newValue) {
    this.$logg('watch - getContentsToken :', newValue);
    if(newValue) {
      this.loadStateEntries['2_contentsToken-loaded'] = true;
    }
  },
};


function beforeCreate() {
}


function created() {
  importConfigs()
  .then((obj) => {
    this.configs_bundle = obj.wholeBundle;
    this.loadStateEntries['1_configsBundle-loaded'] = true;
    this.$logg('config_bundled loaded', obj);
  });

  if (this.getContentsToken) { // safe-catch
    this.loadStateEntries['2_contentsToken-loaded'] = true;
  }
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