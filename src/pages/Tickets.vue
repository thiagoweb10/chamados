<template>
  <div>
    <h1 class="p-6 text-2xl font-bold">Tickets</h1>
    
    <div class="p-6">
      <TicketList :tickets="tickets" />
    </div>

  </div>
</template>
<script setup>
import TicketList from '../components/TicketList.vue'
import { ref, onMounted } from 'vue'

const tickets = ref([])

onMounted(() => {
  // Exemplo com dados mockados. Substitua por API se quiser.
  tickets.value = [
    { id: 1, title: 'Erro na dashboard',    status: 'aberto',       created_at: '2025-06-03' },
    { id: 2, title: 'Falha no login',       status: 'em progresso', created_at: '2025-06-01' },
    { id: 3, title: 'Sugestão de melhoria', status: 'fechado',      created_at: '2025-05-30' },
  ]
})
</script>