<template>
<div id="menu-btn" 
class="btn-toggle--darkmode">

  <IconMenu @click="setNavMenuToggle('switch')"/>

</div>
</template>

<script>
import { mapGetters, mapMutations} from 'vuex';
import IconMenu from '@/assets/icons/icon_menu.vue';

export default {
  name: 'btn_darkmode',
  components: { IconMenu },
  props: {
    
  },
  computed: {
    ...mapGetters('ui',[  ])
  },
  methods: {
    ...mapMutations('ui', ['setNavMenuToggle']),
  },
}
</script>