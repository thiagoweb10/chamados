<template>

  <div class="p-6 mx-auto bg-white">
  <h2 class="text-2xl font-semibold mb-4">Listagem</h2>

  <div class="border rounded-lg shadow-sm">
    <div class="grid grid-cols-6 font-semibold text-gray-700 bg-gray-100 px-4 py-2 rounded-t-lg">
      <div>Categoria</div>
      <div>Título</div>
      <div class="col-span-2">Descrição</div>
      <div>Status</div>
      <div>Ações</div>
    </div>

    <div v-if="loading" class="flex items-center justify-center py-10">
      <svg class="animate-spin h-6 w-6 text-blue-600" viewBox="0 0 24 24">
        <circle
          class="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          stroke-width="4"
          fill="none"
        ></circle>
        <path
          class="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8v8H4z"
        ></path>
      </svg>
      <span class="ml-2 text-sm text-gray-600">Carregando tickets...</span>
    </div>

    <!-- Ticket Item -->
    <div 
      v-if="!loading"
      v-for="ticket in tickets"
            :key="ticket.id"
      class="grid grid-cols-6 items-center border-t px-4 py-3 hover:bg-gray-50"
    >
      <div class="truncate">{{ ticket.category_name }}</div>
     
      <div class="truncate">{{ ticket.title }}</div>
      <div class="col-span-2 px-5 truncate">{{ ticket.description }}</div>
       <div>
        <span 
         :class="statusClasses(ticket.status)"
        class="inline-block text-xs font-medium px-1 py-0.5 rounded-full">{{ ticket.status }}</span>
      </div>
      <div class="flex space-x-2">
        <button
          @click="abrirFormModal(ticket)"
          class="flex items-center gap-2 bg-blue-100 text-blue-700 hover:bg-blue-200 transition-colors px-3 py-1 rounded-md text-sm font-medium"
        >
          <Pencil class="w-4 h-4" />
          <span>Editar</span>
        </button>
        <button
          @click="deletarItem(ticket.id)"
           class="flex items-center gap-2 bg-red-100 text-red-700 hover:bg-red-200 transition-colors px-3 py-1 rounded-md text-sm font-medium"
        >
          <Trash2 class="w-4 h-4" />
          <span>Excluir</span>
        </button>
      </div>
    </div>

  </div>
</div>
</template>

<script setup>
import { Trash2, Pencil } from 'lucide-vue-next'
const emit = defineEmits(['atualizar','excluir', 'abrir'])
const props = defineProps({
  tickets: {
    type: Array,
    required: true,
  },
  loading: {
    type: Boolean,
    default: false,
  },
})

const abrirFormModal = (ticket) => {
  
  emit('abrir', ticket);
}

const deletarItem = async (id) => {
  emit('excluir', { id });
}

const statusClasses = (status) => {
  switch (status) {
    case 'Aberto':
      return 'bg-green-100 text-green-700'
    case 'fechado':
      return 'bg-red-100 text-red-700'
    case 'Em_Progresso':
      return 'bg-yellow-100 text-yellow-800'
    case 'Resolvido':
      return 'bg-gray-800 text-gray-100'
    default:
      return 'bg-gray-100 text-gray-600'
  }
}

</script>