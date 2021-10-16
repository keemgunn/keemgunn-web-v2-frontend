import { createWebHistory, createRouter } from 'vue-router';

import { pages, baseRoutes, redirections, blockPages } from '@/config/routeControl'

if (process.env.NODE_ENV === 'development') {
  console.log('== Route Controls ==============');
  console.log(pages);
  console.log(baseRoutes);
  console.log(redirections);
  console.log(blockPages);
}

export default new createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [...baseRoutes, ...redirections, ...blockPages]
})