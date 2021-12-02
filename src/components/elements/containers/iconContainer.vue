<template>
<div 
:class="containerClass"
@mouseenter="mouseEnter()" 
@mouseleave="mouseLeave()" 
@mouseup="mouseUp()"
@mousedown="mouseDown()" 
@touchstart="touchStart()">
<div :class="iconClass" v-html="svgData"/>
</div>
</template>


<script>
const name = 'iconContainer';
const props = { iconPayload: Object };
function data() { return {
  iconFullName: `icon-${this.iconPayload.name}`,
  containerType: this.iconPayload.actions ? 'icon-actions' : 'icon-dull',
  iconEl: {},
  svgData: '',
  states: {
    hover: false,
    touched: false,
    pushed: false
  }
}}


const computed = {
  filepath() {
    try {
      return require("@/assets/icons/icon-" + this.iconPayload.name + ".svg")
    }
    catch (err) {
      console.log(String(err).split('\n')[0])
      return ''
    }
  },
  containerClass() {
    return [
      this.containerType,
      this.states.hover ? `${this.containerType}--hover` : '',
      this.states.pushed ? `${this.containerType}--pushed` : '',
    ]
  },
  iconClass() {
    return [
      this.iconFullName,
      this.states.hover ? `${this.iconFullName}--hover` : '',
      this.states.pushed ? `${this.iconFullName}--pushed` : '',
    ]
  },
};


const methods = {
  mouseEnter() {
    // this.$logg(`${this.iconFullName} - mouseEnter`);
    this.states.hover = true;
  },
  mouseLeave() {
    // this.$logg(`${this.iconFullName} - mouseLeave`);
    this.states.hover = false;
    this.states.touched = false;
    this.states.pushed = false;
  },
  touchStart() {
    // this.$logg(`${this.iconFullName} - touchStart`);
    this.states.touched = true;
    this.states.hover = true;
    setTimeout(this.mouseLeave, 2000);
  },
  mouseDown() {
    // this.$logg(`${this.iconFullName} - mouseDown`);
    if(!this.states.touched) {
      this.states.pushed = true;
    }
  },
  mouseUp() {
    // this.$logg(`${this.iconFullName} - mouseUp`);
    if(!this.states.touched) {
      this.states.pushed = false;
    } else {
      setTimeout(this.mouseLeave, 300);
    }
  },
};


const replaceStrings = {
  'id=': 'class=',
  'fill="black"' : 'fill="var(--iconfill)"',
  'fill="white"' : 'fill="var(--bgfill)"',
};

function created() {
  replaceStrings[`class="${this.iconFullName}"`] = `class="path-wrapper"`;
  fetch(this.filepath)
  .then(response => response.text())
  .then(str => {
    for (const [key, value] of Object.entries(replaceStrings)) {
      str = str.replaceAll(key, value)
    }
    str = `<svg width="100%" height="100%" viewBox` + str.split("viewBox")[1];
    return str
  })
  .then(str => this.svgData = str)
}


function mounted() {
  // this.iconEl = document.querySelector("." + this.iconFullName);
  // this.iconEl.setAttribute('tabindex', '0');
}


export default {
  name, props, 
  data, computed, methods, created, mounted, 
}
</script>