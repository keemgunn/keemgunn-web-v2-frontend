<template><div id="home">
<teleport to='head'><title>home | keemgunn</title></teleport>

<h1 class="typo-header1">home</h1>

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