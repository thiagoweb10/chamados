<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'

import DefaultLayout from '@/layouts/DefaultLayout.vue'
import AuthLayout from '@/layouts/AuthLayout.vue'
import { useAuthStore } from '@/stores/auth'

const route = useRoute()
const auth = useAuthStore();

onMounted(() => {
  if (auth.token && !auth.user) {
    auth.fetchUser().catch((e) => {
      console.error('Erro ao buscar user no App.vue:', e);
    });
  }
})

const layout = computed(() => {
  if (route.meta.layout === 'AuthLayout') {
    return AuthLayout
  }
  return DefaultLayout
})
</script>

