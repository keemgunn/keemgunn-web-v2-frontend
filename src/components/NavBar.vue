<template>
<header class="nav-bar">

<section class="nav-top">
  <div class="top-set flex f-dir-row f-item-end f-js-cont-space">
    <div :class="['svg', 'logo-gunn', 'h-fit', logo_gunn_status]">
      <svgLogoGunn/>
    </div>

    <nav class="nav-links--expand flex f-dir-row f-al-item-start">
      <navItem v-for="menuItem in getNavMenuArr" 
      :goTo="menuItem" :key="menuItem"></navItem>
    </nav>

    <BtnDarkmode/>  
  </div>  

  <div class="nav-top-line line-ver-1"></div>
</section>




</header>
</template>

<script>
import { mapGetters } from 'vuex';
import svgLogoGunn from '@/components/elements/nav_bar/logo_gunn.vue';
import navItem from '@/components/elements/nav_bar/nav_item.vue';
import BtnDarkmode from '@/components/elements/nav_bar/btn_darkmode.vue';


export default {
  name: 'nav_bar',
  data() { return{
    logo_gunn_status : 'logo-gunn--top'
  }},
  components: {
    svgLogoGunn,
    navItem,
    BtnDarkmode,

  },
  props: {

  },
  computed: {
    ...mapGetters('ui',[
      'getNavMenuArr',
    ])
  },
  methods: {

  },
}
</script>