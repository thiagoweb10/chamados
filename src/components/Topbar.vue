<template>
  <header class="bg-white dark:bg-gray-800 shadow p-4 flex justify-between items-center">
    <h1 class="font-bold">Admin</h1>
    <button @click="toggleDark()" class="bg-blue-500 text-white px-3 py-1 rounded">
      Modo Escuro
    </button>
  </header>
</template>

<script setup>
import { useDark, useToggle } from '@vueuse/core'
const isDark = useDark()
const toggleDark = useToggle(false)
</script>