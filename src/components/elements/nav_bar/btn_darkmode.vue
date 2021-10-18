<template>
<div id="mode-btn" :class="mode_btn" 
@mouseenter="mouseEnter()" 
@mouseleave="mouseLeave()" 
@touchstart="touchStart()"
@click="toggleColorScheme"
><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="icon-mode">


<g id="g-eye" :class="g_eye">

  <g id="p-eye-1">
    <g>
      <mask id="path-1-inside-1_201:983" fill="white">
      <path d="M12 4.5C7 4.5 2.73 7.61 1 12C2.73 16.39 7 19.5 12 19.5C17 19.5 21.27 16.39 23 12C21.27 7.61 17 4.5 12 4.5Z"/>
      </mask>
      <path :class="p_eye" d="M12 4.5C7 4.5 2.73 7.61 1 12C2.73 16.39 7 19.5 12 19.5C17 19.5 21.27 16.39 23 12C21.27 7.61 17 4.5 12 4.5Z" stroke="black" stroke-width="3.2" mask="url(#path-1-inside-1_201:983)"/>
    </g>
  </g>

  <g id="p-eye-2">
    <g>
      <mask id="path-2-inside-2_201:983" fill="white">
      <path d="M12 4.5C7 4.5 2.73 7.61 1 12C2.73 16.39 7 19.5 12 19.5C17 19.5 21.27 16.39 23 12C21.27 7.61 17 4.5 12 4.5Z"/>
      </mask>
      <path :class="p_eye" d="M12 4.5C7 4.5 2.73 7.61 1 12C2.73 16.39 7 19.5 12 19.5C17 19.5 21.27 16.39 23 12C21.27 7.61 17 4.5 12 4.5Z" stroke="black" stroke-width="3.2" mask="url(#path-2-inside-2_201:983)"/>
    </g>
  </g>

  <g id="p-eye-3">
    <g>
      <mask id="path-3-inside-3_201:983" fill="white">
      <path d="M12 4.5C7 4.5 2.73 7.61 1 12C2.73 16.39 7 19.5 12 19.5C17 19.5 21.27 16.39 23 12C21.27 7.61 17 4.5 12 4.5Z"/>
      </mask>
      <path :class="p_eye" d="M12 4.5C7 4.5 2.73 7.61 1 12C2.73 16.39 7 19.5 12 19.5C17 19.5 21.27 16.39 23 12C21.27 7.61 17 4.5 12 4.5Z" stroke="black" stroke-width="3.2" mask="url(#path-3-inside-3_201:983)"/>
    </g>
  </g>

  <g id="p-eye-4">
    <g>
      <mask id="path-4-inside-4_201:983" fill="white">
      <path d="M12 4.5C7 4.5 2.73 7.61 1 12C2.73 16.39 7 19.5 12 19.5C17 19.5 21.27 16.39 23 12C21.27 7.61 17 4.5 12 4.5Z"/>
      </mask>
      <path :class="p_eye" d="M12 4.5C7 4.5 2.73 7.61 1 12C2.73 16.39 7 19.5 12 19.5C17 19.5 21.27 16.39 23 12C21.27 7.61 17 4.5 12 4.5Z" stroke="black" stroke-width="3.2" mask="url(#path-4-inside-4_201:983)"/>
    </g>
  </g>

</g>


<g id="g-cover" :class="g_cover">
  <circle id="p-cover" :class="p_cover" cx="12" cy="12" r="1" fill="white"/>
</g>


<g id="g-pupil" :class="g_pupil">
  <g id="p-pupil">
    <mask id="path-6-inside-5_201:983" fill="white">
    <path d="M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z"/>
    </mask>
    <path :class="p_pupil" d="M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z" stroke="black" stroke-width="3.2" mask="url(#path-6-inside-5_201:983)"/>
  </g>
</g>

<g id="g-moon" :class="g_moon">
  <g id="p-moon">
    <mask id="path-7-inside-6_201:983" fill="white">
    <path d="M12.083 9C12.6441 9 13.1713 9.15 13.6245 9.405C12.7027 9.924 12.083 10.89 12.083 12C12.083 13.11 12.7027 14.076 13.6245 14.595C13.1713 14.85 12.6441 15 12.083 15C10.3812 15 9 13.656 9 12C9 10.344 10.3812 9 12.083 9Z"/>
    </mask>
    <path :class="p_moon" d="M12.083 9C12.6441 9 13.1713 9.15 13.6245 9.405C12.7027 9.924 12.083 10.89 12.083 12C12.083 13.11 12.7027 14.076 13.6245 14.595C13.1713 14.85 12.6441 15 12.083 15C10.3812 15 9 13.656 9 12C9 10.344 10.3812 9 12.083 9Z" stroke="black" stroke-width="0" mask="url(#path-7-inside-6_201:983)"/>
  </g>
</g>


</g>
</svg></div>
</template>

<script>
const name = 'btn_darkmode';
import { mapGetters, mapMutations } from 'vuex';
import { btn_darkmode as cls, createFetchers } from '@/assets/styles/classControl';

function data() { return {
  states: cls.states,
  classKit: cls.classKit,
  colorSchemeOverride : false,
  touch: false,
}}
const components = {};


const computed = {
  ...mapGetters('ui', [ 'isDarkmodeOn' ]),
};
createFetchers(computed, cls);


const methods = {
  ...mapMutations('ui', [ 'toggleDarkmode' ]),
  mouseEnter() {
    this.$logg('btn_darkmode - mouseEnter')
    if( this.isDarkmodeOn ) {
      this.states.hover = 'light';
    }else{
      this.states.hover = 'dark';
    }
  },
  mouseLeave() {
    this.$logg('btn_darkmode - mouseLeave')
    this.states.hover = 'off';
  },
  touchStart() {
    this.$logg('btn_darkmode - touchStart')
    this.touch = true;
    if( this.isDarkmodeOn ) {
      this.states.hover = 'light';
    }else{
      this.states.hover = 'dark';
    }
    setTimeout(this.mouseLeave, 2000);
  },
  toggleColorScheme() {
    if (this.colorSchemeOverride) {
      document.body.className = 'preferred-color'
    } else {
      document.body.className = 'inverted-color'
    }
    if ((this.states.hover !== 'off') && !this.touch) {
      this.states.hover = (this.states.hover === 'dark') ? 'light' : 'dark'
    }
    this.toggleDarkmode();
    this.colorSchemeOverride = !this.colorSchemeOverride;
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