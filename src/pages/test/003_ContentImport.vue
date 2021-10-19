<template><div id="test003_content_import">

<div class="test-a">
  <div class="test-b" :class="classTestName">
    <p class="typo-body1">some content</p>
  </div>
</div>

<p class="typo-body1">{{seeModules.compA}}</p>


<p class="typo-body1">
  testContent.type : {{ testContent.type }} <br>
  Element : {{ Element }}
</p>



<component :is="Element"></component>


</div>
</template>



<script>
import { mapGetters, mapMutations } from 'vuex';
import { defineAsyncComponent } from 'vue';

async function load(list) {
  const loads = {};
  for (let item of list) {
    loads[item] = await import('@/assets/contents/compDynamicTest');
  }
  return loads
}

// const testEl_A = defineAsyncComponent(
//   () => new Promise((resolve, reject) => {
//       resolve(import('@/components/elements/testEl_A.vue'))
//       reject({ error: 'error'})
//     })
// )

function loadDynamicComp(compName) {
  return defineAsyncComponent(() =>
    import("./dydir1/" + compName + ".vue")
  )
}


const name = 'test003_content_import';

const components = {};
components.testEl_A = loadDynamicComp('testEl_A');
components.testEl_B = loadDynamicComp('testEl_B');

function data() { return {
  Element,
  modules : {},
}}

const props = {
  testContent : Object,
  classTestName: String,
  dynamicTest: String,
};

const computed = {
  ...mapGetters([ 'getENV', 'getVendorURL' ]),
  ...mapGetters('ui',[
    'getFrameSize',
    'getScale'
  ]),
  seeModules() {
    return this.modules
  }
};

const methods = {
  ...mapMutations('', [  ]),
};

const watch = {
};

function beforeCreate() {
  }






function created() {
  console.log('created');
  console.log(this.testContent);


  this.Element = this.testContent.type;

  load(['compA']).then( (value) => {
    console.log(value)
    this.modules = value;
  })


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
  name, components, 
  data, props, computed, 
  methods, 
  watch, 
  beforeCreate, created, 
  beforeMount, mounted, 
  beforeUpdate, updated, 
  beforeUnmount, unmounted
}
</script>