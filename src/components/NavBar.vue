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
      class="nav-logo-gunn">
    <svgLogoGunn/></div>

    <nav id="nav-top-links" class="nav-top-links">
      <NavItem v-for="page in getNavMenuArr" 
        class="nav-top-links-item"
        :page="page" :shown="showLinks" :key="page.name">
      </NavItem>
      <div v-if="(this.states.horizontal === 'short') && (this.states.menu)" id="nav-top-links-blank" @click="setMenu(false)"></div>
    </nav>

    <div id="nav-top-btns"
      class="nav-top-btns">
    <BtnDarkmode class="btn"/></div>
  </div>

  <div class="top-cover"></div>

  <div :class="backCoverClass"></div>

  <div class="bottomline"></div>
</section>


</header>
</template>

<script>
const name = 'NavBar';
import { mapGetters, mapMutations } from 'vuex';
import svgLogoGunn from '@/components/elements/nav_bar/logo_gunn.vue';
import NavItem from '@/components/elements/nav_bar/nav_item.vue';
import BtnMenu from '@/components/elements/nav_bar/btn_menu.vue';
import BtnDarkmode from '@/components/elements/nav_bar/btn_darkmode.vue';


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
    return this.states.horizontal === 'short'
  },
  showLinks() {
    return (this.states.horizontal === 'wide') || (this.states.menu)
  },


  navTopClass() {
    if(this.states.horizontal === 'wide') {
      return 'nt--wide'
    } else {
      return 'nt--short'
    }
  },

  backCoverClass() {
    return [
      'back-cover',
      (this.states.horizontal === 'short') && (this.states.menu) ? 'back-cover--show' : ''
    ]
  },

  navTopContentsClass() {
    if(this.states.horizontal === 'wide') {
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
    } else {
      const scrollY = (element.style.top).replace('rem', 'px');
      console.log(scrollY);
      element.style.position = '';
      element.style.top = '';
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }

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