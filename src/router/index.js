import { createRouter, createWebHistory } from 'vue-router'

import Dashboard from '../pages/Dashboard.vue'
import Users from '../pages/Users.vue'
import Tickets  from '../pages/Tickets.vue'
import Categorias from '../pages/Categorias.vue'
import Login from '@/pages/Login.vue'

const routes = [
  { path: '/',           component: Dashboard,  meta: { layout: 'DefaultLayout' }},
  { path: '/login',      component: Login,      meta: { layout: 'AuthLayout'    }},
  { path: '/tickets',    component: Tickets,    meta: { layout: 'DefaultLayout' }},
  { path: '/categorias', component: Categorias, meta: { layout: 'DefaultLayout' }},
  { path: '/users',      component: Users,      meta: { layout: 'DefaultLayout' }}
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router