<template>
  <div v-if="show" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
    <div class="bg-white rounded-2xl shadow-xl max-w-md w-full p-6 relative">
      <h2 class="text-xl font-semibold mb-4">{{ title }}</h2>
      <slot />
      <div class="mt-4 flex justify-end gap-2">
        <button @click="close" class="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300">Cancelar</button>
        <button @click="$emit('confirmar')" class="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700">Confirmar</button>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  show: Boolean,
  title: String,
});
const emit = defineEmits(['fechar', 'confirmar']);

const close = () => {
  emit('fechar');
};
</script>