<template>
<header id="nav-bar" class="noselect">

<section id="nav-top">
  <div id="nav-top-contents" 
  :class="navTopContentsClass">
    <div v-if="showMenuBtn"
      id="nav-menu-btn"
      class="nav-menu-btn">
    <BtnMenu class="btn"
      :menuState="states.menu"
      @toggleMenu="setMenu"/>
    </div>

    <div id="nav-logo-gunn" 
      class="nav-logo-gunn"
      @click="this.$redirect('/home')"
      >
    <svgLogoGunn/></div>

    <transition name="nav-list-fade">
    <nav v-show="showLinks"
    id="nav-top-links" class="nav-top-links">
      <NavItem v-for="page in getNavMenuArr" 
        class="nav-top-links-item"
        :page="page" :shown="showLinks" :key="page.name">
      </NavItem>
      <div id="nav-top-links-blank" @click="setMenu(false)"></div>
    </nav>
    </transition>

    <div id="nav-top-btns"
      class="nav-top-btns">
    <BtnDarkmode class="btn"/></div>
  </div>

  <div class="top-cover"></div>

  <transition name="nav-back-cover-fade">
    <div class="back-cover" v-if="this.showNavDrawer"></div>
  </transition>

  <div class="bottomline"></div>
</section>


</header>
</template>

<script>
const name = 'NavBar';
import { mapGetters, mapMutations } from 'vuex';
import svgLogoGunn from '@/components/elements/logo_gunn.vue';
import NavItem from '@/components/NavBar/comps/nav_item.vue';
import BtnMenu from '@/components/NavBar/comps/btn_menu.vue';
import BtnDarkmode from '@/components/elements/buttons/btn_darkmode.vue';


function data() { return {
  modal: {
    BtnDarkmode: false
  },
  states: {
    horizontal: 'wide', // ['wide', 'short']
    vertical: 'expanded', // ['expanded', 'shrinked'],
    menu: false // [true, false],
  },
}}


const components = {
  svgLogoGunn,
  NavItem,
  BtnMenu,
  BtnDarkmode,
};


const computed = {
  ...mapGetters('ui',[
    'getNavMenuArr', 
    'getNavWidthScale', 
    'getMainEl'
  ]),
  // MODAL STATES ---------------------------
  showMenuBtn() {
    return this.getNavWidthScale === 'short'
  },

  showLinks() {
    return (this.getNavWidthScale === 'wide') || (this.states.menu)
  },

  showNavDrawer() {
    return (this.getNavWidthScale === 'short') && (this.states.menu)
  },

  navTopClass() {
    if(this.getNavWidthScale === 'wide') {
      return 'nt--wide'
    } else {
      return 'nt--short'
    }
  },

  navTopContentsClass() {
    if(this.getNavWidthScale === 'wide') {
      return 'nav-top-contents ntc--wide'
    } else {
      return 'nav-top-contents ntc--short'
    }
  },

  
};


const methods = {
  ...mapMutations('ui', [  ]),
  setMenu(payload){
    this.states.menu = (payload === 'toggle' ? !this.states.menu : payload);
    const element = this.getMainEl;
      const topStyle = `-${window.scrollY}rem`;
    if (this.states.menu) {
      element.style.position = 'fixed';
      element.style.top = topStyle;
      element.style.height = '120vh';
      document.documentElement.style.setProperty("min-height", "100vh");
      document.documentElement.style.setProperty("height", "100vh");

    } else {
      const scrollY = (element.style.top).replace('rem', 'px');
      console.log(scrollY);
      element.style.position = '';
      element.style.top = '';
      element.style.height = '';
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
      document.documentElement.style.setProperty("min-height", "-webkit-fill-available");
      document.documentElement.style.setProperty("height", "-webkit-fill-available");
    }

  }
};


const watch = {
};


function created() {
}


function mounted() {
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