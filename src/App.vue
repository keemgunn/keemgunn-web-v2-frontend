<template>
<div id="prime" 
:class="[ getScale, whatLanguage ]" 
:style="getColors">


  <p class="aaaa"> 가나다라 </p>
  <h2> something </h2>

  <p class="typo-copy-1">Attribute</p>

  <div class="test-a">
    <div class="test-b"></div>
  </div>




  <!-- <test-001/> -->

  <router-view/>
</div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
// import test001 from '@/pages/test/001_UIstate.vue'

export default {
  name: 'App',
  components: {
    // test001,
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
@import "assets/styles/main.scss";


</style>