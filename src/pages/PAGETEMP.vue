<template>
<div></div>




</template>
<script>
const name = 'PAGENAME';
import { mapGetters, mapMutations, mapActions } from 'vuex';


function data() { return {
}}


const components = {
};


const computed = {
  ...mapGetters('',[  ]),
};


const methods = {
  ...mapMutations('', [  ]),
  ...mapActions('', [  ]),
};


const watch = {
};


function beforeCreate() {
}


function created() { this.$logg(name, "~ created ~");
}


function beforeMount() {
}


function mounted() { this.$logg(name, "~ mounted ~");
}


function beforeUpdate() {
}


function updated() { this.$logg(name, "~ updated ~");
}


function beforeUnmount() {
}


function unmounted() {
}


export default {
  name, 
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