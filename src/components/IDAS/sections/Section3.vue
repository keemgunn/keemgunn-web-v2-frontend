<template><section id="section-3">

  <FieldContainer v-for="field of Object.keys(sectionSeed)"
    :key="field"
    :fieldSeed="sectionSeed[field]"
    :downstream="downstream"
    @trigger="handleTrigger"
  />

</section>
</template>
<script>
const name = "Section3"
import { mapGetters, mapMutations, mapActions } from 'vuex';
import FieldContainer from '@/components/IDAS/FieldContainer.vue'

const props = { sectionSeed: Object };
const emits = [ 'trigger' ];

function data() { return {
  downstream : { 
  // Object that send to all components downward.
  }
}}

const components = { FieldContainer };

const computed = {
  ...mapGetters('',[  ]),
};

// It handles Triggers Depend on Payloads.
const triggerHandler = {
  // Payload example : { serial: 'serial-of-departure', method: 'method-name' }

  'serial-here': {
    'method-name-here': (context, data) => { 
      // method-logic-here
      context.$logg('    data:', data);
    }
  },
};


const methods = {
  ...mapMutations('', [  ]),
  ...mapActions('', [  ]),

  // Handle Submitted Message via trigger
  handleTrigger(payload) {
    this.$logg("Handling Triggers... from:", payload.serial, payload.method)
    if(!triggerHandler[payload.serial]) {
      this.$logg("    No Serial Found");
    } else if ((!triggerHandler[payload.serial][payload.method])) {
      this.$logg("    No Method Found");
    } else {
      triggerHandler[payload.serial][payload.method](this, payload.data);
    }
  },

};


const watch = {
};


function beforeCreate() {
}


function created() {
}


function beforeMount() {
}


function mounted() {
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