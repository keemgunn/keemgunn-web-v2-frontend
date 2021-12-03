<template><main id="test-field">

  <component :is="testCompName"/>

</main>
</template>
<script>
const name = 'TestField';
import { mapGetters, mapMutations, mapActions } from 'vuex';
import { defineAsyncComponent } from 'vue';


const props = {};
const emits = {};
function data() { return {
  key: '',
}}


// ---- DYNAMIC COMPONENT IMPORT ------------------
// get filenames in the directory using webpack method.
// for filenames, dynamically import the modules.
const components = {};
const testComps = require.context('@/components/tests/', true, /^.*\.vue$/).keys().map(item => item.replace('./', '').replace('.vue', ''));
for (let file of testComps) {
  const compName = file.replace('./', '').replace('.vue', '')
  components[compName] = defineAsyncComponent(() => import("../components/tests/" + compName + ".vue"))
}


const computed = {
  ...mapGetters('',[  ]),
  testCompName() {
    if(testComps.indexOf(this.key) !== -1) {
      return this.key
    } else {
      window.location.href = '/errorpage/404';
      return ''
    }
  }
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
  this.key = this.$route.params.key;
  console.log(this.key);
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
  name, props, emits, 
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