<template>
  <div class="p-6 mx-auto w-full bg-white">
    <div class="p-6 mx-auto w-full">
      <h2 class="text-2xl font-semibold mb-4">Listagem</h2>

      <div class="border rounded-lg shadow-sm w-full">
        <!-- Cabeçalho -->
        <div class="grid grid-cols-3 w-full font-semibold text-gray-700 bg-gray-100 px-4 py-2 rounded-t-lg">
          <div>ID</div>
          <div>Categoria</div>
          <div>Ações</div>
        </div>

        <!-- Itens -->
        <div 
          v-for="categoria in categorias"
          :key="categoria.id"
          class="grid grid-cols-3 gap-3 items-center border-t px-4 py-3 hover:bg-gray-50 w-full"
        >
          <div class="truncate">{{ categoria.id }}</div>
          <div>{{ categoria.name }}</div>
          <div class="flex space-x-3">
            <button @click="deletarItem(categoria.id)" class="text-red-600 hover:text-red-800 text-sm font-medium">Excluir</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';

const props = defineProps({
  categorias: {
    type: Array,
    required: true,
    default: () => []
  },
})

const emit = defineEmits(['atualizar','excluir'])
const filtro = ref('')
let debounceTimer = null;

watch(filtro, (valor) => {

  clearTimeout(debounceTimer)
  
  debounceTimer = setTimeout(() => {
    console.log('vai atualizar agora')
    emit('atualizar', valor)
  }, 300)
})

const deletarItem = async (id) => {
  emit('excluir', { id });
}

</script>