import { createRouter, createWebHistory } from 'vue-router'


import Home from '../views/HomeView.vue'
import AddProduct from '../views/AddProduct.vue'

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/add-product', name: 'add-product', component: AddProduct },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;