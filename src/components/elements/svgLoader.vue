<template> <div class="svg_loader">

  <h5 class="typo-header5">
    {{ filename }}
  </h5>
  

</div>
</template>

<script>

export default {
  name: 'svg_loader',
  data() { return {
    imported : ""
  }},
  props: {
    filename: String,
  },
  computed: {
    importImg() {
      return () => import(`@/assets/img/svg/${this.filename}.svg`)
    }

  },
  methods: {

  },
  created() {
    this.name = this.filename;
    this.imported = this.importImg();
  }
}
</script>