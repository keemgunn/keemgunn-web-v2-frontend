<template>
<div id="prime" 
:class="[ getScale, whatLanguage ]" >

  <!-- <test004/> -->
  <!-- <NavBar/> -->


  <test003 :testContent="testContent" :classTestName="'abcd'"
  :dynamicTest="'compA'"/>

<router-view/>
</div>
</template>




<script>
import { mapGetters, mapMutations } from 'vuex';
import test003 from '@/pages/test/003_ContentImport.vue'
import testContent from "@/assets/contents/testContent";

export default {
  name: 'App',
  components: {
    // NavBar,
    // test004,
    test003
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


  created() {

    // Adjust Screen Size ---------------------
    this.fetchFrameSize()
    this.$nextTick(() => {
      window.addEventListener('resize', this.fetchFrameSize);
    });

  },

}
</script>


<style lang="scss">
@import "assets/styles/stylesheets/rootStyle.css";
@import "assets/styles/stylesheets/colors.css";
@import "assets/fonts/syncopate.css";
@import "assets/fonts/inter_sd.css";
@import "assets/styles/main.scss";


</style>