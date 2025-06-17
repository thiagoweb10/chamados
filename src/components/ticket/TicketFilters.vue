<template>
  <div class="flex gap-4 mb-4">
    <input v-model="filters.title" @input="emitFilters" placeholder="Buscar título..." class="border p-2 rounded" />

    <select v-model="filters.status" @change="emitFilters" class="border p-2 rounded">
      <option value="">Todos os status</option>
      <option value="Aberto">Aberto</option>
      <option value="Em_Progresso">Em Progresso</option>
      <option value="Resolvido">Resolvido</option>
    </select>

    <select v-model="filters.category_id" @change="emitFilters" class="border p-2 rounded">
      <option value="">Todas categorias</option>
      <option 
        v-for="categoria in categorias"
        :key="categoria.id"
        :value="categoria.id"
      >{{ categoria.name }}</option>
    </select>
               
            
  </div>
</template>

<script setup>
import { reactive, ref, onMounted } from 'vue';
import { getCategory } from '@/api/CategoryApi.js'

const emit = defineEmits(['filtrar'])
const categorias = ref({});
const filters = reactive({
  title: '',
  status: '',
  category_id: ''
})

const listaCategorias = async () => {
  try {
    const response = await getCategory()
    categorias.value = response.data.data.data
  } catch (e) {
    console.error('Erro ao recuperar categorias');
  }
}

onMounted(() => {
  listaCategorias()
})

const emitFilters  = () => {
  emit('filtrar', {...filters})
}
</script>