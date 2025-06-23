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
            v-model="credentials.email"
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
            v-model="credentials.password"
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
            :disabled="loading"
            class="w-full bg-gray-800 hover:bg-gray-600 transition duration-300 text-white py-3 rounded-lg font-semibold flex justify-center items-center gap-2"
          >
            <span v-if="loading">
              <svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 01-8 8z"></path>
              </svg>
            </span>
            <span>{{ loading ? 'Aguarde...' : 'Entrar' }}</span>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue';
import { useAuthStore } from '@/stores/auth';
import { useRouter } from 'vue-router';
import { useAlert } from '@/utils/alert.js'

const { error } = useAlert()

const credentials = reactive({
	email:'',
	password:''
})

const auth = useAuthStore();
const router = useRouter();
const loading = ref(false);

const handleLogin = async () => {

	loading.value = true;

	try {
		await auth.login(credentials);
		router.push('/dashboard');
	} catch (e) {
		console.log('Erro durante o login:', e.response.data.error);
		error(e.response.data.error)
	} finally {
		loading.value = false;
	}
}
</script>

<style scoped>
input::placeholder {
  color: rgba(255, 255, 255, 0.7);
}
</style>