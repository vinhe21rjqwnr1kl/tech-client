import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import ProductView from '@/views/ProductView.vue'
import ProductDetailView from '@/views/ProductDetailView.vue'
import CheckoutView from '@/views/CheckoutView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path:'/products',
      name:'products',
      component: ProductView,
    },
    {
      path:'/productsdetails',
      name:'productsdetails',
      component: ProductDetailView,
    },
    {
      path:'/checkout',
      name:'checkout',
      component: CheckoutView,
    },
   
  ],
})

export default router