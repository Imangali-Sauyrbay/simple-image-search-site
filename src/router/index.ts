import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@pages/IndexPage.vue')
    },
    {
      path: '/favourites',
      name: 'favourites',
      component: () => import('@pages/FavouritesPage.vue')
    },
    {
      path: '/photo/:id',
      name: 'photo',
      component: () => import('@pages/PhotoPage.vue')
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('@pages/SearchPage.vue')
    }
  ]
})

export default router
