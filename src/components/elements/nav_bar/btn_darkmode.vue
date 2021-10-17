<template>
<div id="mode-btn">

  <IconModeNormal @click="toggleDarkmode"/>

</div>
</template>

<script>
import { mapGetters, mapMutations} from 'vuex';
import IconModeNormal from '@/assets/icons/icon_mode_normal.vue';

export default {
  name: 'btn_darkmode',
  components: { IconModeNormal },
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