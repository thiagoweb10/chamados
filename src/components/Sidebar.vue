<template>
  <aside
    :class="sidebarClasses"
    @mouseenter="collapsed = false"
    @mouseleave="collapsed = true"
  >
    <nav>
      <ul class="space-y-2">
        <li
          v-for="item in menuItems"
          :key="item.label"
          :class="menuItemClass"
        >
          <component :is="item.icon" class="w-5 h-5" />
          <router-link
            v-if="!collapsed"
            :to="item.route"
            class="whitespace-nowrap ml-2"
          >
            {{ item.label }}
          </router-link>
        </li>
        
      </ul>
    </nav>
  </aside>
</template>

<script setup>
import { ref, computed } from 'vue'
import { Home, Tickets, Users, Settings, ChartBarBig, LogOut } from 'lucide-vue-next'

const collapsed = ref(true)

const sidebarClasses = computed(() => [
  'transition-all duration-300 bg-gray-800 text-white h-full p-4',
  collapsed.value ? 'w-16' : 'w-64'
])

const menuItemClass = computed(() => [
  'flex items-center hover:bg-gray-600 rounded-lg px-2 py-2',
  collapsed.value ? 'justify-center' : 'space-x-2'
])

const menuItems = [
  { route: '/dashboard', label: 'Dashboard', icon: Home },
  { route: '/tickets', label: 'Tickets', icon: Tickets },
  { route: '/categorias', label: 'Categorias', icon: ChartBarBig },
  { route: '/users', label: 'Usuários', icon: Users },
  { route: '/settings', label: 'Configurações', icon: Settings }
]
</script>

<style scoped>
a.router-link-exact-active {
  font-weight: bold;
}
</style>