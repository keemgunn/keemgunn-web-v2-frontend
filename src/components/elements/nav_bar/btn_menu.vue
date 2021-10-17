<template>
<div id="menu-btn" 
class="btn-toggle--darkmode">

  <IconMenu @click="emitToggle"/>
</div>
</template>

<script>
import { mapGetters, mapMutations} from 'vuex';
import IconMenu from '@/assets/icons/icon_menu.vue';

export default {
  name: 'btn_darkmode',
  components: { IconMenu },
  props: {
    menuState: Boolean
  },
  computed: {
    ...mapGetters('ui',[  ])
  },
  methods: {
    ...mapMutations('ui', []),
    emitToggle() {
      this.$emit('toggleMenu', 'toggle')
    }
  },
}
</script>