<template><section id="section-1">


  <FieldContainer v-for="field of Object.keys(sectionSeed)"
    :key="field"
    :fieldSeed="sectionSeed[field]"
    @trigger="handleTrigger"
  />


</section>
</template>
<script>
const name = "Section1"
import { mapGetters, mapMutations, mapActions } from 'vuex';
import FieldContainer from '@/components/IDAS/FieldContainer.vue'


const props = { sectionSeed: Object };


const emits = [ 'trigger' ];


function data() { return {
  long: 'asdfsafsadfjnwog;isn;oasdfsadfsafasgewrgvdsfvvloj'
}}


const components = {
  FieldContainer
};


const computed = {
  ...mapGetters('',[  ]),
  
};


// It handles Triggers Depend on Payloads.
// Payload example : 
// { serial: 'serial-of-departure', 
// method: 'method-name' }
const triggerHandler = {

  'from-somewhere': {
    'some-method-name': () => {
      console.log('success!!!');
    }
  },

};


const methods = {
  ...mapMutations('', [  ]),
  ...mapActions('', [  ]),

  // Handle Submitted Message via trigger
  handleTrigger(payload) {
    this.$logg("Handling Triggers...")
    triggerHandler[payload.serial][payload.method]();
  },
};


const watch = {
};


function beforeCreate() {
}


function created() { this.$logg(name, "~ created ~");
  console.log(this.sectionSeed);
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
  props, emits, 
  data, computed, 
  methods, 
  watch, 
  beforeCreate, created, 
  beforeMount, mounted, 
  beforeUpdate, updated, 
  beforeUnmount, unmounted
}
</script>