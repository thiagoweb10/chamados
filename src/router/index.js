import { createRouter, createWebHistory } from 'vue-router'

import Dashboard from '../pages/Dashboard.vue'
import Users from '../pages/Users.vue'
import Tickets  from '../pages/Tickets.vue'
import Categorias from '../pages/Categorias.vue'
import Login from '@/pages/Login.vue'

import { useAuthStore } from '@/stores/auth'

const routes = [
  { path: '/login',      component: Login,      meta: { layout: 'AuthLayout'}},
  { path: '/dashboard',  component: Dashboard,  meta: { layout: 'DefaultLayout', requiresAuth: true }},
  { path: '/tickets',    component: Tickets,    meta: { layout: 'DefaultLayout', requiresAuth: true }},
  { path: '/categorias', component: Categorias, meta: { layout: 'DefaultLayout', requiresAuth: true }},
  { path: '/users',      component: Users,      meta: { layout: 'DefaultLayout', requiresAuth: true }}
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach(async (to, from, next) => {
  const auth = useAuthStore();

  if (to.meta.requiresAuth) {
    if (auth.token && !auth.user) {
      try {
        await auth.fetchUser();
      } catch (e) {
		console.log(e)
        console.error('Erro ao buscar usuário, redirecionando para login.');
        return next('/login');
      }
    }

    if (!auth.token || !auth.user) {
      return next('/login');
    }
  }

  next();
});

export default router