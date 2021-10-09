<template><div :id="typography">
  <p class="typo-caption1--caps--thick">current scale : {{ getScale }}</p>
  <h1 class="typo-en-header1">h1: {{single}}</h1>
  <h2 class="typo-en-header2">h2: {{extraShort}}</h2>
  <h3 class="typo-en-header3">h3: {{short}}</h3>
  <h4 class="typo-en-header4">h4: {{medium}}</h4>
  <h5 class="typo-en-header5">h5: {{long}}</h5>
  <h6 class="typo-en-header6">h6: {{extraLong}}</h6>
  <br><br><br><br>
  <p class="typo-caption1">caption1: {{medium}}</p>
  <p class="typo-caption2">caption2: {{long}}</p>
  <p class="typo-caption3">caption3: {{extraLong}}</p>
  <p class="typo-caption4">caption4: {{sentence}}</p>
  <p class="typo-caption5">caption5: {{sentence}}</p>
  <p class="typo-caption6">caption6: {{sentence}}</p>
  <br><br><br><br>
  <p class="typo-caption1--caps">caption1caps: {{medium}}</p>
  <p class="typo-caption2--caps">caption2caps: {{long}}</p>
  <p class="typo-caption3--caps">caption3caps: {{extraLong}}</p>
  <p class="typo-caption4--caps">caption4caps: {{sentence}}</p>
  <p class="typo-caption5--caps">caption5caps: {{sentence}}</p>
  <p class="typo-caption6--caps">caption6caps: {{sentence}}</p>
  <br><br><br><br>
  <p class="typo-body1">body1: {{paragraph}}</p>
  <p class="typo-body2">body2: {{paragraph}}</p>
  <p class="typo-body3">body3: {{paragraph}}</p>
</div>
</template>



<script>
import { mapGetters, mapMutations } from 'vuex';


const name = 'test002_typography';
export default {
  name,
  components: {

  },
  data() { return {
    typography: "typography",
    single: "Apparently",
    extraShort: "Apparently we had",
    short: "Apparently we had reached",
    medium: "Apparently we had reached a great height",
    long: "Apparently we had reached a great height in the atmosphere,",
    extraLong: "Apparently we had reached a great height in the atmosphere, for the sky was a dead black,",
    sentence: "Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.",
    paragraph: "Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside, the sable cloud beneath was dished out, and the car seemed to float in the middle of an immense dark sphere, whose upper half was strewn with silver. Looking down into the dark gulf below, I could see a ruddy light streaming through a rift in the clouds."
  }},
  computed: {
    ...mapGetters([ 'getENV', 'getVendorURL' ]),
    ...mapGetters('ui',[
      'getFrameSize',
      'getScale'
    ])
  },
  methods: {
    ...mapMutations('ui', {

    }),

  },
  created() {

  }
}
</script>

<style lang="scss" scoped>
#typography {
  margin: 1vw;
  padding-bottom: 6vw;
}


</style>