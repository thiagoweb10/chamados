import { createApp } from 'vue'
import App from './App.vue'
import './style.css'
import { createRouter, createWebHistory } from 'vue-router'
import routes from './router'
import { useDark } from '@vueuse/core'

const app = createApp(App)

const router = createRouter({
  history: createWebHistory(),
  routes
})

app.use(router)

useDark({
  selector: 'html',
  attribute: 'class'
})

app.mount('#app')