<template>
  <teleport to='head'>
    <title>keemgunn | IDAS</title>
  </teleport>
  <NavBar/>
<main id="idas">



</main>
</template>

<script>
import NavBar from '@/components/NavBar.vue';

export default {
  name: 'IDAS',
  components: {
    NavBar,
  },
  data() { return {
    lang: this.$route.params.lang
  }},
}
</script>