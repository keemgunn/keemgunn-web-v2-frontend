<template>
<article :id="seed.serial">


<p class="typo-header3">{{this.seed.serial}}</p>


</article>
</template>
<script>
import { mapGetters, mapMutations, mapActions } from 'vuex';
import { defineAsyncComponent } from 'vue';


const recievedSeedExample = {
  _type: "article",
  serial: "s1-f1-a1",
  name: "article-name",
  customArticle: null,
  bindAssets: {
    XXS: {
      sensors: {
        position: true,
      },

      classKit: {
        base: [],
        mouseover: {
          true: 'mouse-over'
        },
        touched: {
          true: 'touched'
        },
        something: {
          on: "something-on"
        },
      },
      styleKit: {
        base: [{
          "margin" : "0 0",
          "padding" : "0 0",
          "grid-template-columns": 'repeat(6, 1fr)',
          "gap": "10rem 10rem",
          "width": ""
        }],
        mouseover: {
          true: {
            "opacity": "0.6"
          }
        },
        touched: {
          true: {
            "opacity": "0.6"
          }
        },
        something: {
          on: {
            "color": "red"
          }
        },
      }
    }
    // XS : { ... }
    // S : { ... }
    // M : { ... }
    // L : { ... }
    // XL : { ... }
    // XXL : { ... }
  },
  eventReactors: {
    mouseEnter: () => {
      return function () {
      }
    },
    mouseMove: () => {
      return function () {
      }
    },
    mouseLeave: () => {
      return function () {
      }
    },
    touchStart: () => {
      return function () {
      }
    },
  } 





}
console.log("recievedSeedExample:", recievedSeedExample);









































const name = 'ArticleContainer';
const props = { seed: Object, }

function data() { return {
  states: {},
  classKit: {},
  styleKit: {},
}}

  // ---- DYNAMIC COMPONENT IMPORT
const components = {};
  // get filenames in the directory using webpack method.
const blockFiles = require.context(
  '@/components/IDAS/blocks/', true, /^.*\.vue$/
);
  // for filenames, dynamically import the modules.
for (let file of blockFiles.keys()) {
  const blockName = file.replace('./', '').replace('.vue', '')
  components[blockName] = defineAsyncComponent(() => import("./blocks/" + blockName + ".vue"))
}


const computed = {
  ...mapGetters('',[  ]),
  
};


const methods = {
  ...mapMutations('', [  ]),
  ...mapActions('', [  ]),

};


const watch = {
};


function beforeCreate() {
  // console.log('ArticleContainer - beforeCreated:', this.seed);
}


function created() {
}


function beforeMount() {
}


function mounted() {
}


function beforeUpdate() {
}


function updated() {
}


function beforeUnmount() {
}


function unmounted() {
}


export default {
  name, props, 
  components, 
  data, computed, 
  methods, 
  watch, 
  beforeCreate, created, 
  beforeMount, mounted, 
  beforeUpdate, updated, 
  beforeUnmount, unmounted
}
</script>