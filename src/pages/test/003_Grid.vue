<template><div :id="test003_grid">


</div>
</template>



<script>
import { mapGetters, mapMutations } from 'vuex';


const name = 'test003_grid';
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
#test003_grid {
  margin: 1vw;
  padding-bottom: 6vw;
}


</style>