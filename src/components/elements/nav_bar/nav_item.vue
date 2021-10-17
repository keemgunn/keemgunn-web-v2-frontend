<template>
  <div 
  :class="['link flex f-dir-col f-al-item-start']">

    <div class="text">
      <p class="typo-mark4--light">
        {{this.goTo.name}}
      </p>
    </div>

    <div class="line"></div>

  </div>
</template>

<script>
import { mapGetters, mapMutations} from 'vuex';

export default {
  name: 'btn_darkmode',
  props: {
    goTo: Object
  },
  data() { return{
  }},
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