<template><div id="uistatetest">

  <h1>{{this.name}}</h1>
  <div v-html="this.testString" :class="this.activeClass.a"></div>
  <h4>frame size: {{getFrameSize}} </h4>
  <div :class="this.activeClass.a">
    <h4>scale: {{getScale}} </h4>
  </div>
  <btn_darkmode/>
  <button @click="styleBindTest"> change color </button>
  <img class="dfas" :src="this.getVendorURL(this.testImage)" v-bind="{ media: mediaTest, 'alt': testAlt }">

</div>
</template>



<script>
import { mapGetters, mapMutations } from 'vuex';
import btn_darkmode from '@/components/elements/nav_bar/btn_darkmode.vue';


const name = 'test001';
export default {
  name,
  components: {
    btn_darkmode
  },
  data() { return {
    name,
    testImage: "testflight/images/azure.png",
    activeClass: {
      a: ['a', 'b']
    },

    testString: `asdfsadfasdfasdf <i>asdfasdfa</i> asdfasdfasdf`,

    testColor: 'red',

    mediaTest: "(max-width:734px)",
    testAlt: "this is alt text",
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
    styleBindTest(){
      this.testColor = ( this.testColor === 'red' ? 'yellow' : 'red' )
    }

  },
  created() {

  }
}
</script>

<style lang="scss" scoped>
h4 {
  // color: chartreuse;
  color: v-bind('testColor');

}
</style>