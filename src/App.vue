<template>
<div id="prime" 
:class="[ getScale, whatLanguage ]" 
:style="getColors">

  <div>
    <p class="aaaa"> 가나다라 </p>
  </div>
    <h2> something </h2>
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
@import "assets/fonts/inter_sd.css";
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&display=swap');
@import "assets/styles/main.scss";

.aaaa {
  color: white;
  background-color: darkslategray;

}

</style>