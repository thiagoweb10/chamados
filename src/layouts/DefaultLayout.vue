<template>
 <div class="flex flex-col h-screen bg-gray-100  text-black">
    <Topbar />
    <div class="flex-1 flex ">
      <Sidebar />
      <main class="flex-1 p-6">
        
        <router-view />
         
      </main>
    </div>
  </div>

</template>


<script setup>
import Sidebar from '@/components/Sidebar.vue'
import Topbar from '@/components/Topbar.vue'
</script>