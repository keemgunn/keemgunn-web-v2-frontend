<template>
  <teleport to='head'>
    <title>keemgunn | 404</title>
  </teleport>


  <h1 class="typo-header1">Not Found</h1>


</template>



<script>





export default {
  name: 'NotFound',
  components: {


  },
  data() { return {
    cccc: "rgba(0, 0, 255, 1)",
    blotterOpacity: 1,
  }},
  methods: {
    blotterOp: function(){
      return {
        'transition': "500ms",
        'opacity': this.blotterOpacity
      }
    }
  },
  created() {

  },
}
</script>