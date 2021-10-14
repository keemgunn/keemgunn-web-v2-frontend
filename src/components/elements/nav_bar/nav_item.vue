<template>
  <div class="nav-item flex f-dir-col f-al-item-start gap15">
    <div class="nav-item-text">
      <a href="#" class="typo-mark4--light">{{this.goTo}}</a>
    </div>
    <div class="nav-item-line line-ver-3"></div>
  </div>
</template>

<script>
import { mapGetters, mapMutations} from 'vuex';

export default {
  name: 'btn_darkmode',
  props: {
    goTo: String
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