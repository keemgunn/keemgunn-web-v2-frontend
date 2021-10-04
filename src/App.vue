<template>
  <div id="app_main" :style="getColors">
    <p>가나다라 <i>마바사</i> </p>
    <h2> something </h2>
    <test-001/>
    <router-view/>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import test001 from '@/pages/test/001_UIstate.vue'

export default {
  name: 'App',
  components: {
    test001,
  },
  data() { return {

  }},
  computed: {
    ...mapGetters(['getENV']),
    ...mapGetters('ui',[
      'getFrameSize',
      'getScale',
      'getColors',
      'getThemeColor',
      'whatLanguage',
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
@import "assets/fonts/kopub.css";
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap');
@import "assets/styles/main.scss";
</style>