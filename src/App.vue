<template>
  <div id="app_main" :style="getColors">
    <p>가나다라 <i>마바사</i> </p>
    <test-001/>
    <router-view/>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import test001 from '@/pages/test/001_UIstate.vue'

export default {
  name: 'App',
  metaInfo: {
      // if no subcomponents specify a metaInfo.title, this title will be used
      title: 'Default Title',
      // all titles will be injected into this template
      titleTemplate: '%s | My Awesome Webapp'
  },
  components: {
    test001,
  },

  computed: {
    ...mapGetters(['getENV']),
    ...mapGetters('ui',[
      'getFrameSize',
      'getScale',
      'getColors',
      'getThemeColor'
    ])
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
@import "assets/fonts/KoPub/kopub.css";

body {
  background-color: var(--i94);
}
#app_main {
  background-color: var(--i94);
  color: var(--i0);
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
  p {
    font-family: 'KoPub Batang';
    font-size: 8rem;
    i{
      font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
      font-style: normal;
    }
  }
}
</style>
