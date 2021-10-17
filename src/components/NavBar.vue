<template>
<header id="nav-bar">

<section id="nav-top"
:class="[class_nav_top, 'flex f-dir-col f-js-cont-space']">

  <div id="nav-top-contents" 
  :class="[class_top_contents, 'flex f-dir-row f-js-cont-space']">

    <div id="nav-menu-btn"
     v-if="this.showMenuBtn"
    class="btns flex f-dir-row f-al-item-start f-js-cont-start gap8">
      <BtnMenu class="btn"/>
    </div>

    <div id="nav-logo-gunn" 
    :class="['logo-gunn', 'svg', 'h-fit']">
    <svgLogoGunn/></div>

    <nav id="nav-top-links" 
     v-if="this.showLinks"
    :class="['links', flex_top_links]">
    <navItem v-for="menuItem in getNavMenuArr" 
    :goTo="menuItem" :key="menuItem.name"></navItem></nav>

    <div id="nav-top-btns"
    class="btns flex f-dir-row f-al-item-start f-js-cont-end gap8">
      <BtnDarkmode class="btn"/>
    </div>

  </div>

  <div class="bottomline line-ver-1"></div>

</section>




</header>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import svgLogoGunn from '@/components/elements/nav_bar/logo_gunn.vue';
import navItem from '@/components/elements/nav_bar/nav_item.vue';
import BtnMenu from '@/components/elements/nav_bar/btn_menu.vue';
import BtnDarkmode from '@/components/elements/nav_bar/btn_darkmode.vue';


export default {
  name: 'nav_bar',
  data() { return{
    vertical : 'expand',
    class_nav_top_types : {
      normal: "nav-top--normal",
      expand: "nav-top--expand"
    },

    class_top_contents_types : {
      wide: "contents--wide",
      short: "contents--short"
    },
    logo_gunn_vertical_style : {
      expand: "logo--gunn--expand",
      shrink: "logo--gunn--shrink"
    },
    flex_top_links_types : {
      wide: "flex f-dir-row f-al-item-start",
      short: "flex f-dir-col f-al-item-start"
    },


  }},
  components: {
    svgLogoGunn,
    navItem,
    BtnMenu,
    BtnDarkmode,
  },
  props: {

  },
  computed: {
    ...mapGetters('ui',[
      'getNavMenuArr', 'getNavWidthScale', 'isNavMenuToggle',
      'getFrameSize'
    ]),

    class_nav_top() {
      if (this.getNavWidthScale === 'wide') {
        return this.class_nav_top_types.normal
      } else if (this.isNavMenuToggle) {
        return this.class_nav_top_types.expand
      } else {
        return this.class_nav_top_types.normal
      }
    },

    class_top_contents() {
      return this['class_top_contents_types'][this.getNavWidthScale]
    },
    class_logo_gunn_horizontal() {
      return this["logo_gunn_vertical_style"]["expand"]
    },
    flex_top_links() {
      return this['flex_top_links_types'][this.getNavWidthScale]
    },

    showMenuBtn() {
      return this.getNavWidthScale === 'short'
    },
    showLinks() {
      return (this.getNavWidthScale === 'wide') || (this.isNavMenuToggle)
    }

  },
  methods: {
    ...mapMutations('ui', ['setNavMenuToggle']),
  },
  watch : {
    getNavWidthScale() {
      this.setNavMenuToggle(false);
    }
  },
  created() {
  },
  mounted() {
  }
}
</script>