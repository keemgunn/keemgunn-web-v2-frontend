<template>
<div id="menu-btn" 
@click="emitToggle">
<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">


<g id="icon-menu" :class="icon_menu">

  <g id="g-line-1" :class="g_line">
    <path :class="p_line" d="M4 8C3.45 8 3 7.55 3 7C3 6.45 3.45 6 4 6H20C20.55 6 21 6.45 21 7C21 7.55 20.55 8 20 8H4Z" fill="black"/>
  </g>

  <g id="g-line-2" :class="g_line">
    <path :class="p_line" d="M20 13H4C3.45 13 3 12.55 3 12C3 11.45 3.45 11 4 11H20C20.55 11 21 11.45 21 12C21 12.55 20.55 13 20 13Z" fill="black"/>
  </g>

  <g id="g-line-3" :class="g_line">
    <path :class="p_line" d="M4 18H20C20.55 18 21 17.55 21 17C21 16.45 20.55 16 20 16H4C3.45 16 3 16.45 3 17C3 17.55 3.45 18 4 18Z" fill="black"/>
  </g>

</g>


</svg></div>
</template>

<script>
const name = 'btn_menu';
import { mapGetters, mapMutations } from 'vuex';
import { btn_menu as cls, createFetchers } from '@/assets/styles/classControl';

function data() { return {
  states: cls.states,
  classKit: cls.classKit,
  colorSchemeOverride : false,
  touch: false,
}}
const components = {};

const props = {
  menuState: Boolean
};

const computed = {
  ...mapGetters('ui', [ ]),
};
createFetchers(computed, cls);


const methods = {
  ...mapMutations('ui', [ ]),
  emitToggle() {
    this.$emit('toggleMenu', 'toggle')
  }
};


const watch = {
  menuState(newValue) {
    this.states.modal = newValue;
  }
};


function created() {
}


function mounted() {
}


export default {
  name, 
  components, props, 
  data, computed, 
  methods, 
  watch, 
  created, mounted
}
</script>