import Dashboard from '../pages/Dashboard.vue'
import Users from '../pages/Users.vue'
import Tickets  from '../pages/Tickets.vue'
import Categorias from '../pages/Categorias.vue'

export default [
  { path: '/',        component: Dashboard },
  { path: '/tickets', component: Tickets },
  { path: '/categorias', component: Categorias },
  { path: '/users',   component: Users }
]