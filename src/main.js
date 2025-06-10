import { createApp } from 'vue'
import App from './App.vue'
import './style.css'
import { createRouter, createWebHistory } from 'vue-router'
import routes from './router'

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

const app = createApp(App)

const router = createRouter({
  history: createWebHistory(),
  routes
})

app.use(router)
app.use(VueSweetalert2)

app.mount('#app')