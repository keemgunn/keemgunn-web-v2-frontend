<template>
<div id="prime" 
:class="[ getScale, whatLanguage ]" 
:style="getColors">

  <!-- <test004/> -->
  <!-- <NavBar/> -->




<router-view/>
</div>
</template>




<script>
import { mapGetters, mapMutations } from 'vuex';

import testContent from "@/assets/contents/testContent";

// import test004 from '@/pages/test/004_FlexBox.vue';
// import NavBar from "@/components/NavBar.vue";

export default {
  name: 'App',
  components: {
    // NavBar,
    // test004,

  },
  data() { return {
    testContent

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
@import "assets/styles/rootStyle.css";
@import "assets/fonts/syncopate.css";
@import "assets/fonts/inter_sd.css";
@import "assets/styles/main.scss";
</style>