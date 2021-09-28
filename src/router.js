
import { createWebHistory, createRouter } from 'vue-router';

//-- PAGE IMPORTS
import Home from '@/pages/Home.vue';
import NotFound from '@/pages/NotFound.vue';

export default new createRouter({
 history: createWebHistory(process.env.BASE_URL),
 routes: [
    {
      path: '/',
      component: Home
    },{
     path: '/no',
      component: NotFound
    }
  ]
 })