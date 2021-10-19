import { createWebHistory, createRouter } from 'vue-router';

import { pages, baseRoutes, redirections, blockPages } from '@/config/routeControl'

if (process.env.NODE_ENV === 'development') {
  console.log('== Route Controls ::pages', pages,'::baseRoutes', baseRoutes, '::redirections', redirections, '::blockPages', blockPages);
}

export default new createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [...baseRoutes, ...redirections, ...blockPages]
})