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

function loadDynamicComp(compName) {
  return defineAsyncComponent(() =>
    import("./dydir1/" + compName + ".vue")
  )
} // warning : 충분히 가까운 경로에서 불러와야함... 정확한 이유는 불명확.


const importSome = "compA"
const testImportA = require('@/assets/contents/compDynamicTest')[importSome];
// module 이름 지정 임포트 
console.log('testImportA:', testImportA);









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
  this.Element = this.testContent.type;

  load(['compA']).then((value) => {
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