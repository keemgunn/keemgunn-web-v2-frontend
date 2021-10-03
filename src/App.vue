<template>
  <router-view/>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'App',
  components: {
  },
  computed: {
    ...mapGetters('ui', {
      viewRatio: 'viewRatio'
    })
  },
  methods: {
    ...mapActions('ui', {
      hello: 'doHello'
    }),
    onResize() {
      this.hello();
    }
  },
  created() {
    this.onResize();
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
