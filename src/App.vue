<template>
  <div :class="[ getScale, whatLanguage ]" >
    <router-view/>
  </div>
</template>
<script>
import { mapGetters, mapMutations, mapActions } from 'vuex';
export default {
  name: 'App',
  components: {},
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
    ]),
    ...mapGetters('api',[
      'getCliIP', 'getContentsToken'
    ]),
    appFontSize() {
      return String(this.fontScale) + "%"
    }
  },
  methods: {
    ...mapMutations('ui', {
      frameResize: 'resize'
    }),
    ...mapActions('api', [
      'openTheDoor', 'checkContentsServer'
    ]),
    fetchFrameSize() {
      this.frameResize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    }
  },
  created() {
    this.openTheDoor();
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