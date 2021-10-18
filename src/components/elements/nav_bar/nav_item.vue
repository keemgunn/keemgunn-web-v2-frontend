<template>
<transition :name="transitName">
<div v-if="shown">

  <div class="text">
    <p class="typo-mark4--light">
      {{this.goTo.name}}
    </p>
  </div>

  <div class="line"></div>

</div>
</transition>
</template>

<script>
import { mapGetters, mapMutations} from 'vuex';

export default {
  name: 'btn_darkmode',
  props: { 
    goTo: Object, 
    shown: Boolean, 
  },
  data() { return{
    transitName : `nav-item-fade-${this.goTo.index}`
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