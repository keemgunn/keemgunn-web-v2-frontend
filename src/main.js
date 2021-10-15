import { createApp } from 'vue';
import App from '@/App.vue';
import store from '@/store/store';
import router from '@/router';
import LoadScript from "vue-plugin-load-script";




createApp(App)
  .use(store)
  .use(router)
  .use(LoadScript)
  .mount("#app")