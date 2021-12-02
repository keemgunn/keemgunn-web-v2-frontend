<template>

  <teleport to='head'>
    <title>home | keemgunn</title>
  </teleport>

  <NavBar/>

  <main id="home">
    <div class="main-text-wrapper text-center">
      <p class="typo-header2 home-name">keem gunn</p>
      <p class="typo-header2 home-info">- A PORFOLIO WEBSITE -</p>
      <p class="typo-header2 home-paragraph">this website is Currently on development</p>
    </div>

    <div class="text-graphics typo-header6--light">
      <div class="text-block" v-for="string in textGraphicString" :key="'home-textgraphic-' + string" :id="'home-textgraphic-' + string">
        {{string}}
      </div>
    </div>
  </main>

</template>



<script>
import { mapGetters, mapMutations, mapActions } from 'vuex';
import NavBar from '@/components/NavBar/NavBar.vue';

export default {
  name: 'Home',
  components: {
    NavBar
  },
  data() { return {
    lang: this.$route.params.lang,
    textGraphicString: "My Name IS Keem Gunn I AM A SofTware Developer and Also a DESIGNER THIS IS MY Portfolio WEBSITE CUrrently developing PleasE Come Back LAteR"
  }},
  computed: {
    ...mapGetters('ui', ['whatLanguage']),
  },
  methods: {
    ...mapMutations('ui', ['setLanguage']),
    ...mapActions('', []),
  },
  created() {
    this.setLanguage(this.lang);
    document.documentElement.lang = this.lang;
  }
}
</script>

<style lang="scss">
  .main-text-wrapper {
    width: 100%;
    // height: 100vh;
    min-height: -webkit-fill-available;
    height: -webkit-fill-available;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: center;
    gap: 8vw;
  }
  .home-name {
    font-size: 10vw !important;
    // line-break: normal;
    word-wrap: normal;
    word-break: keep-all;
  }
  .home-info {
    font-weight: 400;
    font-size: 4vw !important;
  }
  .home-paragraph {
    font-weight: 400;
    font-size: 8.2vw !important;
    line-height: 1.2;
  }

  .text-graphics {
    widows: 100%;
    // height: 100vh;
    min-height: -webkit-fill-available;
    height: -webkit-fill-available;
    position: absolute;
    top: 0; left: 0;
    padding-top: calc(var(--nav-top-height) + 1.2vw);
    padding-bottom: 1.2vw;
    // z-index: -1;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: space-between;
    justify-content: space-between;
    overflow: hidden;
    * {
      transition: all 300ms ease;
    }
  }
  .text-block {
    display: inline;
    font-size: 10vw !important;
    color: var(--ink3);
    opacity: 0.11;
  }
  .text-block:hover {
    color: var(--accent1);
    opacity: 0.92;
  }
</style>