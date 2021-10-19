<template><div id="test-el-a">

<div class="test-a">
  <div class="test-b">
    <p class="typo-body1">TEST ELEMENT A !!!!!</p>
  </div>
</div>






</div>
</template>



<script>
import { mapGetters, mapMutations } from 'vuex';
console.log(" ================ test Element A");

const name = 'test-el-a';
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
#test-el-a {
  margin: 1vw;
  padding-bottom: 6vw;
}


</style>