<template>
<div :id="blockSeed.serial">

</div>
</template>
<script>
const name = 'idasFig_1';
import { camelToDash } from '@/functions/stringMod';


const props = { 
  blockSeed: Object, 
  downstream: Object,
  position: Number
};
const emits = [ 'trigger', 'mounted' ];


function data() { return {
  svgData: '',
}}


const computed = {
  fetchCSS() {
    try {
      return this.getCSSbyModal(this);
    }
    catch (err) {
      console.error('!error!', `@${this.serial || 'unknown'}`);
      console.error(err);
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


function created() {
}


function mounted() {
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