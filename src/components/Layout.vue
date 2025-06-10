<template>
  <div class="flex min-h-screen bg-white text-black">
    <Sidebar />
    <div class="flex-1 flex flex-col">
      <Topbar />
      <main class="p-6">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script setup>
import Sidebar from './Sidebar.vue'
import Topbar from './Topbar.vue'
</script>