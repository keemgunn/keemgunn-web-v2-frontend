<template>
<div :id="blockSeed.serial" class="fig-container" v-html="svgData">

</div>
</template>
<script>
const name = 'idasFigContainer';
import { camelToDash } from '@/functions/stringMod';


const props = { 
  blockSeed: Object, 
  downstream: Object,
  position: Number
};
const emits = [ 'trigger', 'mounted' ];


function data() { return {
  containerEl: {},
  svgData: '',
  figName: ''
}}


const computed = {
  filepath() {
    try {
      return require("@/assets/svg/" + this.figName + ".svg")
    }
    catch (err) {
      console.error(String(err).split('\n')[0])
      return ''
    }
  },

  serial() {
    return this.blockSeed.serial || 'none'
  },

  type() {
    return camelToDash(this.blockSeed.type);
  }
};


const methods = {
};


const watch = {
};


const replaceStrings = {
  'id=': 'class=',
  'black' : 'var(--ink0)',
  '#00FF00' : 'var(--accent0)',
  'white' : 'var(--ink6)',
};


function created() {
  this.figName = this.blockSeed.contents.figName;
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
  this.$emit('mounted');
}


export default {
  name, props, emits, 
  data, computed, 
  methods, 
  watch, 
  created, 
  mounted, 
}
</script>