<template><div id="test003_content_import">

<div class="test-a">
  <div class="test-b">
    <p class="typo-body1">some content</p>
  </div>
</div>


<p class="typo-body1">
  {{ testContent.type }}
</p>

<component :is="Element"></component>


</div>
</template>



<script>
import { mapGetters, mapMutations } from 'vuex';
import testEl_A from '@/components/elements/testEl_A.vue';
import testEl_B from '@/components/elements/testEl_B.vue';


const name = 'test003_content_import';
export default {
  name,
  components: {
    testEl_A,
    testEl_B,
  },
  data() { return {
    Element
  }},
  props: {
    testContent : Object,
  },
  computed: {
    ...mapGetters([ 'getENV', 'getVendorURL' ]),
    ...mapGetters('ui',[
      'getFrameSize',
      'getScale'
    ]),
  },
  methods: {
    ...mapMutations('ui', {

    }),

  },
  created() {
    this.Element = this.testContent.type;
  }
}
</script>

<style lang="scss" scoped>
#test003_content_import {
  margin: 1vw;
  padding-bottom: 6vw;
}


</style>