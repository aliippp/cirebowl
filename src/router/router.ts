import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomePage.vue')
    },
    {
      path: '/menu',
      name: 'menu',
      component: () => import('@/views/MenuPage.vue')
    },
    {
      path: '/menu/:id',
      name: 'food',
      component: () => import('@/views/FoodPage.vue')
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: () => import('@/views/CheckoutPage.vue')
    }
  ]
})

export default router
