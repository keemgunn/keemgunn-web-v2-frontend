<template>
<div id="prime" 
:class="[ getScale, whatLanguage ]" 
:style="getColors">

  <test-003/>

  <router-view/>
</div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import test003 from '@/pages/test/003_Grid.vue'

export default {
  name: 'App',
  components: {
    test003,
  },
  data() { return {
    fontScale: 200,
    testcol: "red",

  }},
  computed: {
    ...mapGetters(['getENV']),
    ...mapGetters('ui',[
      'getFrameSize',
      'getScale',
      'getColors',
      'getThemeColor',
      'whatLanguage',
    ]),
    appFontSize() {
      return String(this.fontScale) + "%"
    }
  },

  methods: {
    ...mapMutations('ui', {
      frameResize: 'resize'
    }),
    fetchFrameSize() {
      this.frameResize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    }
  },

  beforeCreate(){ // ==================================

  },

  created() { // ======================================

    // Adjust Screen Size ---------------------
    this.fetchFrameSize()
    this.$nextTick(() => {
      window.addEventListener('resize', this.fetchFrameSize);
    });

  },

}
</script>


<style lang="scss">
@import "assets/fonts/cormorant_garamond.css";
@import "assets/fonts/inter_sd.css";
@import "assets/fonts/arita_buri.css";
@import "assets/styles/main.scss";
</style>