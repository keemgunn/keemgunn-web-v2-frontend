<template>

  <teleport to='head'>
    <title>IDAS | keemgunn</title>
  </teleport>

  <NavBar/>

  <main id="idas">
    <IDAStitleBar @titlebar-loaded="titlebarCheck()"/>
    <div 
    v-if="this.isFullfilled('1-titlebar-loaded') && this.isFullfilled('2-configsBundle-loaded')">
      <component :is="'Section1'" :sectionSeed="configs_bundle.s1"/>
      <component :is="'Section2'" :sectionSeed="configs_bundle.s2"/>
      <component :is="'Section3'" :sectionSeed="configs_bundle.s3"/>
      <component :is="'Section4'" :sectionSeed="configs_bundle.s4"/>
    </div>
  </main>

</template>



<script>
const name = 'IDAS';
import { mapGetters, mapMutations } from 'vuex';
import { defineAsyncComponent } from 'vue';
import NavBar from '@/components/NavBar/NavBar.vue';
import IDAStitleBar from '@/components/IDAS/IDAStitleBar.vue';


async function importConfigs() {
  try {
    const { wholeBundle } = await import("../components/IDAS/configs/configs_bundle.js")
    return { wholeBundle }
  } catch (err) {
    console.error(err);
  }
}


const components = { NavBar, IDAStitleBar };
const sectionFiles = require.context('@/components/IDAS/sections/', true, /^.*\.vue$/);
for (let file of sectionFiles.keys()) {
  const sectionName = file.replace('./', '').replace('.vue', '');
  components[sectionName] = defineAsyncComponent(() => import("../components/IDAS/sections/" + sectionName + ".vue" ))
}


function data() { return {
  lang: this.$route.params.lang,
  configs_bundle: {},
  testBlockList: {},
  serial: 'main',
  initQueueEntry: {
    '1-titlebar-loaded': false,
    '2-configsBundle-loaded': false,
    '3-contentsToken-loaded': false,
  },
}}


const computed = {
  ...mapGetters('ui',[ 'getFrameSize' ]),
  ...mapGetters('api',[ 'getContentsToken' ]),
};


const methods = {
  ...mapMutations('moderator', ['addToInitQueue', 'commitInitQueue']),
  ...mapMutations('ui', ['loadMainTag']),
  serialize(str) {
    return `${this.serial}_${str}`
  },
  isFullfilled(task) {
    return this.initQueueEntry[task]
  },
  resolveQueue(task) {
    this.initQueueEntry[task] = true;
    this.commitInitQueue({pageName: 'idas', taskSerial: this.serialize(task)});
  },

  titlebarCheck() {
    this.resolveQueue('1-titlebar-loaded');
    importConfigs()
    .then((obj) => {
      this.configs_bundle = obj.wholeBundle;
      this.resolveQueue('2-configsBundle-loaded');
      this.$logg('config_bundled loaded', obj);
    });
  }
};


const watch = {
  getContentsToken(newValue) {
    this.$logg('watch - getContentsToken :', newValue);
    if(newValue) {
      this.resolveQueue('3-contentsToken-loaded');
    }
  },
};


function created() {
  for (const task of Object.keys(this.initQueueEntry)) {
    this.addToInitQueue({ pageName: 'idas', taskSerial: this.serialize(task) });
  }

  if (this.getContentsToken) { // safe-catch
    this.resolveQueue('3-contentsToken-loaded');
  }
}


function beforeMount() {
}


function mounted() {
  this.loadMainTag('idas');
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
  created, 
  beforeMount, mounted, 
  beforeUpdate, updated, 
  beforeUnmount, unmounted
}
</script>