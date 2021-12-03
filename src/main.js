import { createApp } from 'vue';
import App from '@/App.vue';
import store from '@/store/store';
import router from '@/router';
import LoadScript from "vue-plugin-load-script";

// IMPORT GLOBAL METHODS ----------------
import { logg } from '@/functions/logger';
import { redirect } from '@/functions/redirection';
import { nid } from '@/functions/nanoid';


const app = createApp(App)
  
app.use(store)
  .use(router)
  .use(LoadScript);

app.config.globalProperties.$envIsDev = process.env.NODE_ENV == 'development';
app.config.globalProperties.$logg = logg;
app.config.globalProperties.$redirect = redirect;
app.config.globalProperties.$nid = nid;

app.mount("#app");