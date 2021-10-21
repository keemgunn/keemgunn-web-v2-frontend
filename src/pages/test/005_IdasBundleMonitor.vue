<template><div id="test005_idas_bundle">

{{idasConfigsBundle}}
<br>
<p class="typo-body1">{{message}}</p>

</div>
</template>



<script>
import { mapGetters, mapMutations } from 'vuex';

import idasConfigsBundle from '@/components/IDAS/configs/configs_bundle';


const name = 'test003_content_import';
export default {
  name,
  components: {

  },
  data() { return {
    idasConfigsBundle,
    message: "something <b>special</b>"
  }},
  props: {

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


  }
}
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@300&display=swap');

  #test005_idas_bundle {
    background-color: rgba(0, 0, 0, 0.644);
    padding: 40rem 20rem 140rem 20rem;
    font-family: 'IBM Plex Mono', monospace;
    color: aquamarine;
    font-size: 20rem;
    line-height: 1.8;
    letter-spacing: 0.2rem;
    height: fit-content;
    word-wrap:break-word;
  }
</style>