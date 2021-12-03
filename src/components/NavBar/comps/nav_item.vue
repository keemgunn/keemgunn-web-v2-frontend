<template>
<transition :name="transitName">
<div v-if="shown"
  @click="this.$redirect(page.url)"
>

  <div class="text">
    <p class="typo-mark4--light">
      {{this.page.name}}
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
    page: Object, 
    shown: Boolean, 
  },
  data() { return{
    transitName : `nav-item-fade-${this.page.index}`
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