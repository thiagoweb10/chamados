import { createApp } from 'vue'
import App from './App.vue'
import './style.css'
import router from '@/router/index.js'

import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'
import { useAuthStore } from '@/stores/auth'

import { createPinia } from 'pinia'

const pinia = createPinia()

const app   = createApp(App)


app.use(router)
app.use(pinia)
const auth  = useAuthStore()
auth.initialize()
app.use(VueSweetalert2)

app.mount('#app')