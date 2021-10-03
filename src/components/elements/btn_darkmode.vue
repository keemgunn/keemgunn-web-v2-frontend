<template>
  <div class="hello">
    <button @click="toggleDarkmode">darkmode: {{isDarkmodeOn}} </button>
  </div>
</template>

<script>
import { mapGetters, mapMutations} from 'vuex';

export default {
  name: 'btn_darkmode',
  props: {

  },
  computed: {
    ...mapGetters('ui',[
      'isDarkmodeOn'
    ])
  },
  methods: {
    ...mapMutations('ui', {
      toggleDarkmode: 'toggleDarkmode'
    }),
    toggle() {
      this.toggleDarkmode();
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
