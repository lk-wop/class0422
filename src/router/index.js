import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Login from  '../views/Login'
import Register from '@/views/Register'
import Search from '@/views/Search'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/search',
    name: 'Search',
    component: Search
  },
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
