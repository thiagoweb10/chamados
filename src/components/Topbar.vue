<template>
  <header class="bg-gray-800 shadow p-4 flex justify-between items-center">
  <h1 class="ml-14 font-bold text-white text-2xl">Help Desk</h1>

  <div class="flex items-center space-x-4">
    <h1 v-if="auth.user" class="text-white text-sm text-right">Olá, {{ auth.user?.name || 'Carregando...' }}</h1>
    
    <button
      @click="handleLogout"
      class="flex items-center gap-2 text-white hover:text-gray-300 transition-colors duration-200"
    >
    <LogOut class="w-5 h-5" />
    <span>Sair</span>
  </button>
  </div>
</header>
</template>

<script setup>
import { useAuthStore } from '@/stores/auth';
import { useRouter } from 'vue-router';
import { LogOut } from 'lucide-vue-next'

const auth = useAuthStore();
const router = useRouter();

const handleLogout = () => {
  auth.logout();
  router.push('/login');
};
</script>

