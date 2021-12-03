<template><div id="idas-title-bar">
  <div class="title-wrapper">
    <div :class="hueClass" :style="hueStyle"></div>
    <p class="page-title">ADMISSION ESSAY FOR IDAS</p>
  </div>

  <transition name="idas-scroll-indi">
    <div v-show="progressDone" 
    id="idas-scroll-indicator"
    class="scroll-indicator">
      <p class="typo-header6--light" :style="sciStyle">
      scroll down</p>
    </div>
  </transition>
</div>
</template>
<script>
const name = 'IDAStitleBar';
import { mapGetters, mapMutations, mapActions } from 'vuex';


const props = {};
const emits = [ 'titlebar-loaded' ];
function data() { return {
  progressDone: false,
  sciEl: {},
  sciPos: 1,
}}


const components = {
};


const computed = {
  ...mapGetters('moderator',[ 'getInitState' ]),
  ...mapGetters('ui', [ 'isDarkmodeOn', 'getStageArea' ]),
  getProgress() {
    return this.getInitState('idas')
  },
  progressStyle() {
    return {
      width: `${this.getProgress * 100}%`
    }
  },
  hueStyle() {
    if(this.isDarkmodeOn) {
      return {
        // "mix-blend-mode": "multiply",
        "width": `${this.getProgress * 100}%`
      }
    } else {
      return {
        // "mix-blend-mode": "screen",
        "width": `${this.getProgress * 100}%`
      }
    }
  },
  hueClass() {
    let result = 'progress-bar-hue '
    if(this.progressDone) {
      result = result + 'progress-done';
    }
    return result
  },
  sciStyle() {
    return {
      opacity: 2 - (this.sciPos * 0.12)
    }
  }
};


const methods = {
  ...mapMutations('', [  ]),
  ...mapActions('', [  ]),

  getElPos(element) {
    const top = element.getBoundingClientRect().top;
    const height = element.getBoundingClientRect().height;
    return (this.getStageArea.bottom - top) / height
  },


  positionUpdater() {
    this.sciPos = this.getElPos(this.sciEl);
  },
};


const watch = {
  getProgress(newValue) {
    if(newValue === 1) {
      this.progressDone = true;
      document.documentElement.className = '';
    }
  }
};


function beforeCreate() {
}


function created() {
  document.documentElement.className = 'no-scroll no-scroll-long';
}


function beforeMount() {
}


function mounted() {
  setTimeout(() => {
    this.$emit('titlebar-loaded');
  }, 400);
  this.sciEl = document.getElementById('idas-scroll-indicator');
  window.addEventListener('scroll', this.positionUpdater, { passive: true });
}


function beforeUpdate() {
}


function updated() {
}


function beforeUnmount() {
}


function unmounted() {
}


export default {
  name, props, emits, 
  components, 
  data, computed, 
  methods, 
  watch, 
  beforeCreate, created, 
  beforeMount, mounted, 
  beforeUpdate, updated, 
  beforeUnmount, unmounted
}
</script>