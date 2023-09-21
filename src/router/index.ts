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
      path: '/favorites',
      name: 'favorites',
      component: () => import('@pages/IndexPage.vue')
    },
    {
      path: '/photo/:id',
      name: 'photo',
      component: () => import('@pages/IndexPage.vue')
    }
  ]
})

export default router
