<template>
  <h1>{{this.name}}</h1>
  <h4>frame size: {{getFrameSize}} </h4>
  <h4>scale: {{getScale}} </h4>
  <btn_darkmode/>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import btn_darkmode from '@/components/elements/btn_darkmode.vue';

const name = 'test001';
export default {
  name,
  components: {
    btn_darkmode
  },
  data() { return {
    name
  }},
  computed: {
    ...mapGetters(['getENV']),
    ...mapGetters('ui',[
      'getFrameSize',
      'getScale'
    ])
  },
  methods: {
    ...mapMutations('ui', {

    }),

  },
  created() {

  },
}
</script>

<style>


</style>
