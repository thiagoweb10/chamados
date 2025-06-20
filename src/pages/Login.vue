<template>
  <div
    class="min-h-screen w-full bg-cover bg-center flex items-center justify-center"
    style="background-image: url('/images/helpdesk-bg.jpg');"
  >
    <!-- Formulário com efeito Glass -->
    <div
      class="backdrop-blur-md bg-white/20 border border-white/30 rounded-2xl shadow-2xl p-8 w-full max-w-md bg-gray-800"
    >
      <h2 class="text-3xl font-bold mb-6 text-center">Login Help Desk</h2>

      <form @submit.prevent="handleLogin" class="space-y-5">
        <div>
          <label for="email" class="block text-sm font-medium">E-mail</label>
          <input
            v-model="email"
            type="email"
            id="email"
            required
            class="mt-1 w-full px-4 py-3 rounded-lg bg-white/30 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Digite seu e-mail"
          />
        </div>

        <div>
          <label for="password" class="block text-sm font-medium">Senha</label>
          <input
            v-model="password"
            type="password"
            id="password"
            required
            class="mt-1 w-full px-4 py-3 rounded-lg bg-white/30 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Digite sua senha"
          />
        </div>

        <div>
          <button
            type="submit"
            class="w-full bg-gray-800  hover:bg-gray-600  transition duration-300 text-white py-3 rounded-lg font-semibold"
          >
            Entrar
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useAlert } from '@/utils/alert.js'

const { error } = useAlert()

const email = ref('')
const password = ref('')

const handleLogin = () => {


  
  error('Usuario ou senha invalidos!')
  console.log('Login:', email.value, password.value)
}
</script>

<style scoped>
input::placeholder {
  color: rgba(255, 255, 255, 0.7);
}
</style>