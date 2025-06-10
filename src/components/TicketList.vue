<template>

  <div class="p-6 mx-auto bg-white">
  <h2 class="text-2xl font-semibold mb-4">Listagem de Tickets</h2>
  <div class="border rounded-lg shadow-sm">
    <div class="grid grid-cols-6 font-semibold text-gray-700 bg-gray-100 px-4 py-2 rounded-t-lg">
      <div>Categoria</div>
      <div>Status</div>
      <div>Título</div>
      <div class="col-span-2">Descrição</div>
      <div>Ações</div>
    </div>

    <!-- Ticket Item -->
    <div class="grid grid-cols-6 items-center border-t px-4 py-3 hover:bg-gray-50">
      <div class="truncate">Suporte</div>
      <div>
        <span class="inline-block bg-green-100 text-green-700 text-xs font-medium px-2 py-0.5 rounded-full">Aberto</span>
      </div>
      <div class="truncate">Erro no login</div>
      <div class="col-span-2 truncate">Usuário não consegue acessar a conta após atualização</div>
      <div class="flex space-x-2">
        <button class="text-blue-600 hover:text-blue-800 text-sm font-medium">Editar</button>
        <button class="text-red-600 hover:text-red-800 text-sm font-medium">Excluir</button>
      </div>
    </div>

    <!-- Outro Ticket -->
    <div class="grid grid-cols-6 items-center border-t px-4 py-3 hover:bg-gray-50">
      <div class="truncate">Financeiro</div>
      <div>
        <span class="inline-block bg-yellow-100 text-yellow-700 text-xs font-medium px-2 py-0.5 rounded-full">Pendente</span>
      </div>
      <div class="truncate">Fatura não emitida</div>
      <div class="col-span-2 truncate">Cliente informou que a fatura de abril não foi gerada</div>
      <div class="flex space-x-2">
        <button class="text-blue-600 hover:text-blue-800 text-sm font-medium">Editar</button>
        <button class="text-red-600 hover:text-red-800 text-sm font-medium">Excluir</button>
      </div>
    </div>

    <!-- Adicione mais tickets conforme necessário -->
  </div>
</div>

  <div class="bg-white dark:bg-gray-800 shadow rounded-lg p-4">
    <h2 class="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
      Lista de Tickets
    </h2>

    <div v-if="tickets && tickets.length" class="space-y-3">
      <div
        v-for="ticket in tickets"
        :key="ticket.id"
        class="p-4 border border-gray-200 dark:border-gray-700 rounded flex justify-between items-center"
      >
        <div>
          <h3 class="font-medium text-gray-900 dark:text-white">
            {{ ticket.title }}
          </h3>
          <p class="text-sm text-gray-600 dark:text-gray-300">
            Status:
            <span :class="statusColor(ticket.status)">
              {{ ticket.status }}
            </span>
          </p>
        </div>
        <p class="text-sm text-gray-500">
          {{ formatDate(ticket.created_at) }}
        </p>
      </div>
    </div>

    <div v-else class="text-center text-gray-500 dark:text-gray-400">
      Nenhum ticket encontrado.
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  tickets: {
    type: Array,
    required: true,
  },
})

const statusColor = (status) => {
  switch (status) {
    case 'aberto':
      return 'text-green-500 font-semibold'
    case 'em progresso':
      return 'text-yellow-500 font-semibold'
    case 'fechado':
      return 'text-red-500 font-semibold'
    default:
      return 'text-gray-500'
  }
}

const formatDate = (dateStr) => {
  const date = new Date(dateStr)
  return date.toLocaleDateString('pt-BR')
}
</script>