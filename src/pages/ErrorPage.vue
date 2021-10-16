<template>
  <teleport to='head'>
    <title>{{this.code}} | keemgunn</title>
  </teleport>
<main class="err">


<div 
:class="['flex', 'f-dir-col', 'f-js-cont-space']">
  <div id="code" class="m-auto">
    <h1 class="typo-header1">{{this.code}}</h1>
  </div>
  <div id="title" class="m-auto">
    <h5 class="typo-header5">{{this.title}}</h5>
  </div>
  <div id="message" class="m-auto">
    <p class="typo-caption3">{{this.message}}</p>
  </div>
</div>


</main>
</template>



<script>
import errorContents from '@/assets/contents/errorContents';


export default {
  name: 'Error',
  components: {},
  data() { return {
    code: 0,
    title: 'null',
    message: 'null'
  }},
  methods: {

  },
  created() {
    this.code = this.$route.params.code
    if (Object.keys(errorContents).indexOf(String(this.code)) !== -1) {
      this.title = errorContents[this.code]['title'];
      this.message = errorContents[this.code]['message'];
    }
    
  },
}
</script>