<template>
<div id="prime" 
:class="[ getScale, whatLanguage ]" 
:style="getColors">

  <test004/>

  <router-view/>
</div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import test004 from '@/pages/test/004_FlexBox.vue';
import testContent from "@/assets/contents/testContent";

export default {
  name: 'App',
  components: {
    test004,
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
html {
  -webkit-text-size-adjust:none;
}

@media (max-width: 6000px) { //XXL
  html { 
    font-size: 8.125%; 
    --margin-safe-col : 50rem; 
  }
}
@media (max-width: 2400px) { //XL
  html { 
    font-size: 7.5%; 
    --margin-safe-col : 40rem; 
  }
}
@media (max-width: 1920px) { //L
  html { 
    font-size: 6.875%; 
    --margin-safe-col : 40rem; 
  }
}
@media (max-width: 1320px) { //M
  html { 
    font-size: 6.25%; 
    --margin-safe-col : 40rem; 
  }
}
@media (max-width: 960px) { //S
  html { 
    font-size: 6.25%; 
    --margin-safe-col : 30rem; 
  }
}
@media (max-width: 680px) { //XS
  html { 
    font-size: 6.25%; 
    --margin-safe-col : 18rem; 
  }
}
@media (max-width: 320px) { //XXS
  html { 
    font-size: 5.625%; 
    --margin-safe-col : 18rem; 
  }
}
@import "assets/fonts/cormorant_garamond.css";
@import "assets/fonts/inter_sd.css";
@import "assets/fonts/arita_buri.css";
@import "assets/styles/main.scss";
</style>