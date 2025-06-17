<template>
  <div v-if="meta.last_page > 1" class="flex items-center justify-center gap-2 mt-6">
    <button
      @click="emit('change', meta.current_page - 1)"
      :disabled="meta.current_page === 1"
      class="px-3 py-1 rounded border hover:bg-gray-100 disabled:opacity-50"
    >
      Anterior
    </button>

    <span class="text-sm font-medium">
      Página {{ meta.current_page }} de {{ meta.last_page }}
    </span>

    <button
      @click="emit('change', meta.current_page + 1)"
      :disabled="meta.current_page === meta.last_page"
      class="px-3 py-1 rounded border hover:bg-gray-100 disabled:opacity-50"
    >
      Próxima
    </button>
  </div>
</template>

<script setup>
const props = defineProps({
  meta: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['change'])
</script>