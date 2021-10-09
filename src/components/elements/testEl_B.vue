<template><div id="test-el-b">

<div class="test-a">
  <div class="test-b">
    <p class="typo-body1">TEST ELEMENT B</p>
  </div>
</div>






</div>
</template>



<script>
import { mapGetters, mapMutations } from 'vuex';


const name = 'test-el-b';
export default {
  name,
  components: {

  },
  data() { return {

  }},
  computed: {
    ...mapGetters([ 'getENV', 'getVendorURL' ]),
    ...mapGetters('ui',[
      'getFrameSize',
      'getScale'
    ])
  },
  methods: {
    ...mapMutations('ui', {

    }),

  },
  created() {

  }
}
</script>

<style lang="scss" scoped>
#test-el-b {
  margin: 1vw;
  padding-bottom: 6vw;
}


</style>