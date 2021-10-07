<template>
  <teleport to='head'>
    <title>keemgunn | home</title>

  </teleport>
  <div>
    <h1> {{lang}} </h1>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex';

export default {
  name: 'Home',
  components: {
  },
  data() { return {
    lang: this.$route.params.lang
  }},
  computed: {
    ...mapGetters('ui', ['whatLanguage']),
  },
  methods: {
    ...mapMutations('ui', ['setLanguage']),
    ...mapActions('api', [
      'openTheDoor',
    ]),
  },
  created() {
    this.setLanguage(this.lang);
    document.documentElement.lang = this.lang;
    this.openTheDoor()

  }
}
</script>