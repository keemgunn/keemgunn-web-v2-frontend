import { createApp } from 'vue';
import App from '@/App.vue';
import store from '@/store/store';
import router from '@/router';
import LoadScript from "vue-plugin-load-script";




const app = createApp(App)
  
app.use(store)
  .use(router)
  .use(LoadScript);

app.config.globalProperties.$envIsDev = process.env.NODE_ENV == 'development';

app.mount("#app");