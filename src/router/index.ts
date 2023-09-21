import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@pages/IndexPage'),
    },
    {
      path: '/favorites',
      name: 'favorites',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/photo/:id',
      name: 'photo',
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
