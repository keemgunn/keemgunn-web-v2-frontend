<template><section id="s1-testSection">



  <div class="grid-test">
    <div class="child-1">
      <p class="typo-body1">{{long}}</p>
    </div>
    <div class="child-2">
      <p class="typo-body1">{{long}}</p>
    </div>
    <div class="child-3">
      <p class="typo-body1">{{long}}</p>
    </div>
  </div>

  





<FieldContainer
  :name="'s1f1'"
/>


</section>
</template>
<script>
import { mapGetters, mapMutations, mapActions } from 'vuex';
import FieldContainer from '@/components/IDAS/FieldContainer.vue'


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