<template>
<header id="nav-bar">

<section id="nav-top" :class="nav_top">

  <div id="nav-top-contents" 
  :class="nav_top_contents">

    <div id="nav-menu-btn"
      v-if="showMenuBtn"
      :class="nav_menu_btn">
    <BtnMenu class="btn"
      :menuState="states.menu"
      @toggleMenu="setMenu"/>
    </div>

    <div id="nav-logo-gunn" 
      :class="nav_logo_gunn">
    <svgLogoGunn/></div>

    <nav id="nav-top-links" 
       v-if="showLinks"
      :class="nav_top_links">
    <navItem v-for="page in getNavMenuArr" 
      :goTo="page" :key="page.name">
    </navItem></nav>

    <div id="nav-top-btns"
      :class="nav_top_btns">
    <BtnDarkmode class="btn"/></div>

  </div>

  <div class="bottomline line-ver-1"></div>

</section>

</header>
</template>

<script>
const name = 'NavBar';
import { mapGetters, mapMutations } from 'vuex';
import svgLogoGunn from '@/components/elements/nav_bar/logo_gunn.vue';
import navItem from '@/components/elements/nav_bar/nav_item.vue';
import BtnMenu from '@/components/elements/nav_bar/btn_menu.vue';
import BtnDarkmode from '@/components/elements/nav_bar/btn_darkmode.vue';
import { NavBar as cls, createFetchers } from '@/assets/styles/classControl';


function data() { return {
  states: cls.states,
  classKit: cls.classKit
}}


const components = {
  svgLogoGunn,
  navItem,
  BtnMenu,
  BtnDarkmode,
};


const computed = {
  ...mapGetters('ui',[
    'getNavMenuArr', 
    'getNavWidthScale', 
  ]),
  // MODAL STATES ---------------------------
  showMenuBtn() {
    return this.states.horizontal === 'short'
  },
  showLinks() {
    return (this.states.horizontal === 'wide') || (this.states.menu)
  }
};
createFetchers(computed, cls);



const methods = {
  ...mapMutations('ui', [  ]),
  setMenu(payload){
    this.states.menu = (payload === 'toggle' ? !this.states.menu : payload);
    document.documentElement.className = this.states.menu ? 'no-scroll no-scroll-lang' : '';
  } 
};


const watch = {
  getNavWidthScale(newValue) {
    this.states.horizontal = newValue;
    this.setMenu(false);
  }
};


function created() {
  this.states.horizontal = this.getNavWidthScale;
    // modify states to current width scale.
}


function mounted() {
  console.log(computed['nav-top']);
    // modify states to current width scale.
}


export default {
  name, 
  components, 
  data, computed, 
  methods, 
  watch, 
  created, mounted
}
</script>