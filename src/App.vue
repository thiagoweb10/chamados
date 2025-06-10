<template>
  <div class="h-screen overflow-hidden flex flex-col">
    <!-- Topbar fixa -->
    <header class="h-16 text-white bg-gray-800 flex items-center px-4 fixed top-0 left-0 right-0 z-10">
      <h1 class="text-lg font-bold ml-15">Help Desk</h1>
    </header>

    <!-- Container abaixo da topbar -->
    <div class="flex flex-1 pt-16 overflow-hidden">
      <Sidebar />
      <main class="flex-1 overflow-auto p-4 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
        <RouterView />
      </main>
    </div>
  </div>
</template>

<script setup>
import Sidebar from './components/Sidebar.vue'
</script>
