<template>
  <aside
    class="transition-all duration-1000 bg-gray-800 text-white h-full p-4"
    :class="collapsed ? 'w-16' : 'w-64'"
    @mouseenter="collapsed = false"
    @mouseleave="collapsed = true"
  >
    <div class="mb-4 text-sm text-center">
      {{ collapsed ? '☰' : 'Menu' }}
    </div>
    <nav>
      <ul>
  <li
    v-for="item in menuItems"
    :key="item.label"
    class="flex items-center"
    :class="[
      collapsed ? 'justify-center mb-6' : 'space-x-2 mb-2'
    ]"
  >
    <component :is="item.icon" class="w-5 h-5" />
    <router-link
      v-if="!collapsed"
      :to="item.route"
      class="whitespace-nowrap"
    >
      {{ item.label }}
    </router-link>
  </li>
</ul>

    </nav>
  </aside>
</template>

<script setup>
import { ref } from 'vue'
import { Home, Tickets, Users, Settings } from 'lucide-vue-next'

const collapsed = ref(true)

const menuItems = [
  { route: '/',         label: 'Dashboard', icon: Home },
  { route: '/tickets',  label: 'Tickets',   icon: Tickets },
  { route: '/users',    label: 'Usuários',  icon: Users },
  { route: '/settings', label: 'Configurações', icon: Settings },
]
</script>

<style scoped>
a {
  display: block;
  padding: 0.5rem 0;
  color: white;
}
a.router-link-exact-active {
  font-weight: bold;
}
</style>
