<template>
  <div class="flex gap-4 mb-4">

    <input 
      v-model="filters.name" 
      @input="emitFilters" 
      placeholder="Buscar Categoria" 
      class="border p-2 rounded" 
    />
     
  </div>
</template>

<script setup>
import { reactive } from 'vue';

const emit = defineEmits(['filtrar'])
const filters = reactive({
  name: ''
})



const emitFilters  = () => {
  emit('filtrar', {...filters})
}
</script>