import Dashboard from '../pages/Dashboard.vue'
import Users from '../pages/Users.vue'
import Tickets  from '../pages/Tickets.vue'

export default [
  { path: '/',        component: Dashboard },
  { path: '/tickets', component: Tickets },
  { path: '/users',   component: Users }
]