<template>
  <teleport to='head'>
    <title>keemgunn | works</title>
  </teleport>
  <div>
    <h1> {{lang}} </h1>
  </div>
</template>

<script>

export default {
  name: 'Works',
  components: {
  },
  data() { return {
    lang: this.$route.params.lang
  }},
}
</script>