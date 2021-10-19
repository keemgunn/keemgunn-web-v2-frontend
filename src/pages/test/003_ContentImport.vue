<template><div id="test003_content_import">

<div class="test-a">
  <div class="test-b" :class="classTestName">
    <p class="typo-body1">some content</p>
  </div>
</div>

  <p class="typo-body1">{{seeModules.compA}}</p>


<p class="typo-body1">
  {{ testContent.type }}
</p>



<component :is="Element"></component>


</div>
</template>



<script>
import { mapGetters, mapMutations } from 'vuex';
// import testEl_A from '@/components/elements/testEl_A.vue';
// import testEl_B from '@/components/elements/testEl_B.vue';
const testEl_A = () => import('@/components/elements/testEl_A.vue');
const testEl_B = () => import('@/components/elements/testEl_B.vue');
// CALLBACK SUCCESS !!!!

// const dynamics = {}
//   dynamics['compA'] = () => import('@/assets/contents/compDynamicTest');



async function load(list) {
  const loads = {};
  for (let item of list) {
    loads[item] = await import('@/assets/contents/compDynamicTest');
  }
  return loads
}



const name = 'test003_content_import';
export default {
  name,
  components: {
    testEl_A,
    testEl_B,
  },
  data() { return {
    Element,
    modules : {},

  }},
  props: {
    testContent : Object,
    classTestName: String,
    dynamicTest: String,
  },
  computed: {
    ...mapGetters([ 'getENV', 'getVendorURL' ]),
    ...mapGetters('ui',[
      'getFrameSize',
      'getScale'
    ]),
    seeModules() {
      return this.modules
    }

  },
  methods: {
    ...mapMutations('ui', {

    }),

  },
  created() {
    this.Element = this.testContent.type;
    load(['compA']).then( (value) => {
      console.log(value)
      this.modules = value;
    })

  }
}
</script>

<style lang="scss" scoped>
#test003_content_import {
  margin: 1vw;
  padding-bottom: 6vw;
}


</style>