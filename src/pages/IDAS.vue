<template>
  <teleport to='head'>
    <title>keemgunn | IDAS</title>
  </teleport>
  <div>
    <h1> {{lang}} </h1>
  </div>
</template>

<script>

export default {
  name: 'IDAS',
  components: {
  },
  data() { return {
    lang: this.$route.params.lang
  }},
}
</script>

<style>


</style>
