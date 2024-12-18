import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AddProduct from '@/views/AddProduct.vue'
import EditProduct from '@/views/EditProduct.vue'
import LoginView from '@/views/LoginView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/add-product',
    name: 'add-product',
    component: AddProduct 
  },

  {
    path: '/edit-product/:id',
    name: 'edit-product',
    component: EditProduct
  },

  {
    path: '/login',
    name: 'login',
    component: LoginView 
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
