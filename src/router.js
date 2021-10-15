import { createWebHistory, createRouter } from 'vue-router';

//-- PAGE IMPORTS
// import Home from '@/pages/Home.vue';
// import About from '@/pages/About.vue';
// import Works from '@/pages/Works.vue';
// import IDAS from '@/pages/IDAS.vue';
import ErrorPage from '@/pages/ErrorPage.vue';

export default new createRouter({
 history: createWebHistory(process.env.BASE_URL),
 routes: [ 
    // {
    //   path: '/home/:lang(ko||en)',
    //   component: Home
    // },
    // {
    //   path: '/about/:lang(ko||en)',
    //   component: About
    // },
    // {
    //   path: '/works/:lang(ko||en)',
    //   component: Works
    // },
    // {
    //   path: '/idas/:lang(ko||en)',
    //   component: IDAS
    // },
    {
      path: '/:code(404||503)',
      component: ErrorPage
    },

   


    
    { path: '/', redirect: '/home/en' },
    
    { path: '/home', redirect: '/home/en' },
    { path: '/about', redirect: '/about/en' },
    { path: '/works', redirect: '/works/en' },
    { path: '/idas', redirect: '/idas/en' },
    
    { path: '/home/', redirect: '/home/en' },
    { path: '/about/', redirect: '/about/en' },
    { path: '/works/', redirect: '/works/en' },
    { path: '/idas/', redirect: '/idas/en' },
    
    { path: '/home/:else', redirect: '/en' },
    { path: '/about/:else', redirect: '/about/en' },
    { path: '/works/:else', redirect: '/works/en' },
    { path: '/idas/:else', redirect: '/idas/en' },
    
    
    { path: '/home/en', redirect: '/503' },
    { path: '/about/en', redirect: '/503' },
    { path: '/works/en', redirect: '/503' },
    { path: '/idas/en', redirect: '/503' },
    
    
    
    { path: '/:else', redirect: '/404' },
  ]
})