<template><section id="section-1">


  <FieldContainer v-for="field in Object.keys(seed)"
    :key="field.serial"
    :seed="seed[field]"/>


</section>
</template>
<script>
const name = "Section1"
import { mapGetters, mapMutations, mapActions } from 'vuex';
import FieldContainer from '@/components/IDAS/FieldContainer.vue'


const props = { seed: Object };


function data() { return {
  long: 'asdfsafsadfjnwog;isn;oasdfsadfsafasgewrgvdsfvvloj'
}}


const components = {
  FieldContainer
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
  console.log(this.seed);
}


function beforeMount() {
}


function mounted() { this.$logg(name, "~ mouted ~");
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
  name, components, 
  props, data, computed, 
  methods, 
  watch, 
  beforeCreate, created, 
  beforeMount, mounted, 
  beforeUpdate, updated, 
  beforeUnmount, unmounted
}
</script>