import { createRouter, createWebHistory } from 'vue-router'


import Home from '../views/HomeView.vue'
import AddProduct from '../views/AddProduct.vue'
import EditProduct from '../views/EditProduct.vue'
import ProductView from '../views/ProductView.vue'

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/add-product', name: 'add-product', component: AddProduct },
  { path: '/product/:id', name: 'product', component: ProductView },
  { path: '/edit-product/:id', name: 'edit-product', component: EditProduct },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;