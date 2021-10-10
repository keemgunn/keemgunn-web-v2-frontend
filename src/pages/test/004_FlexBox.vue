<template><div class="test003_content_import">




<div class="flex-container--row">
  <div class="flex-item"> <h3 class="typo-header3">1</h3></div>
  <div class="flex-item"> <h3 class="typo-header3">2</h3></div>
  <div class="flex-item"> <h3 class="typo-header3">3</h3></div>
  <div class="flex-item"> <h3 class="typo-header3">4</h3></div>
</div>


  <div class="test-a"></div>


  <div class="test-k">
    <p class="typo-header1">test mothod</p>
  </div>
  <div class="test-k">
    <p class="typo-header1">test mothod</p>
  </div>
  <div class="test-k">
    <p class="typo-header1">test mothod</p>
  </div>
  <div class="test-k">
    <p class="typo-header1">test mothod</p>
  </div>
  <div class="test-k">
    <p class="typo-header1">test mothod</p>
  </div>
  <div class="test-k">
    <p class="typo-header1">test mothod</p>
  </div>
  <div class="test-k">
    <p class="typo-header1">test mothod</p>
  </div>
  <div class="test-k">
    <p class="typo-header1">test mothod</p>
  </div>
  <div class="test-k">
    <p class="typo-header1">test mothod</p>
  </div>



  <section class="section-type-c">
    <div class="test-back">
      <div class="test-b blur"></div>
    </div>
  </section>





</div>
</template>



<script>
import { mapGetters, mapMutations } from 'vuex';


const name = 'test003_content_import';
export default {
  name,
  components: {

  },
  data() { return {

  }},
  props: {

  },
  computed: {
    ...mapGetters([ 'getENV', 'getVendorURL' ]),
    ...mapGetters('ui',[
      'getFrameSize',
      'getScale'
    ]),
  },
  methods: {
    ...mapMutations('ui', {

    }),

  },
  created() {


  }
}
</script>