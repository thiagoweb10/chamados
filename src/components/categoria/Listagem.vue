<template>
  <div class="p-6 mx-auto bg-white">
    <div class="p-6 max-w-4xl mx-auto">
      <h2 class="text-2xl font-semibold mb-4">Listagem</h2>

      <div class="border rounded-lg shadow-sm justify-start" >
        <div class="grid grid-cols-1  font-semibold text-gray-700 bg-gray-100 px-4 py-2 rounded-t-lg">
          <div>Nome Categoria:</div>
          <div>
            <input
              type="text"
              v-model="filtro"
              placeholder="Filtrar categorias"
              class="border border-gray-300 px-2 py-1 text-normal font-normal w-full"
            />
          </div>
        </div>
      </div>

      <br />

      <div class="border rounded-lg shadow-sm justify-start" >
        <!-- Cabeçalho -->
        <div class="grid grid-cols-3  font-semibold text-gray-700 bg-gray-100 px-4 py-2 rounded-t-lg">
          <div>ID</div>
          <div>Categoria</div>
          <div>Ações</div>
        </div>

        <!-- Item de Categoria -->
        <div 
          v-for="categoria in categorias"
          :key="categoria.id"
          class="grid grid-cols-3 gap-3 p-3 items-center border-t px-4 py-3 hover:bg-gray-50"
        >
          <div class="truncate">{{ categoria.id }}</div>
          <div>{{ categoria.name  }}</div>
          <div class="flex space-x-3">
            <button @click="deletarItem(categoria.id )" class="text-red-600 hover:text-red-800 text-sm font-medium">Excluir</button>
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