<template>
<div id="mode-btn">

  <IconModeNormal @click="toggleColorScheme"/>

</div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import IconModeNormal from '@/assets/icons/icon_mode_normal.vue';

export default {
  name: 'btn_darkmode',
  components: { IconModeNormal },
  data() { return {
    colorSchemeOverride : false
  }},
  props: {
  },
  computed: {
    ...mapGetters('ui', [ 'isDarkmodeOn' ]),
  },
  methods: {
    ...mapMutations('ui', [ 'toggleDarkmode' ]),
    toggleColorScheme() {
      if (this.colorSchemeOverride) {
        document.body.className = 'preferred-color'
      } else {
        document.body.className = 'inverted-color'
      }
      this.toggleDarkmode();
      this.colorSchemeOverride = !this.colorSchemeOverride;
    }
  },
}
</script>