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
      'isDarkmodeOn',
      'getThemeColor'
    ])
  },
  methods: {
    ...mapMutations('ui', [ 'toggleDarkmode' ]),
  },
}
</script>