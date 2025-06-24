<template>
  <Transition name="fade">
    <div v-if="show" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <Transition name="popup">
        <div class="bg-white rounded-2xl shadow-lg w-full max-w-md p-6" v-if="show">
          <h2 class="text-xl font-bold mb-4">{{ title }}</h2>

          <form @submit.prevent="handleSubmit" class="space-y-4">
            <div>
              <label class="block text-sm font-medium">Nome</label>
              <input v-model="form.name" type="text" class="w-full px-3 py-2 border rounded-md" />
            </div>

            <div class="flex justify-end gap-2 pt-4">
              <button type="button" @click="emit('fechar')" class="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300">
                Cancelar
              </button>
              <button
                type="submit"
                class="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50"
                :disabled="loading"
                >
                <span v-if="loading" class="animate-spin inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"></span>
                {{ loading ? 'Salvando...' : 'Salvar' }}
                </button>
            </div>
          </form>
        </div>
      </Transition>
    </div>
  </Transition>
</template>

<script setup>
import { ref,reactive } from 'vue';

const props = defineProps({
  show: Boolean,
  title: String,
});

const emit = defineEmits(['fechar', 'salvar']);
const loading = ref(false);

const form = reactive({
  id: '',
  name: ''
});

const handleSubmit = async () => {

    loading.value = true;
    
    emit('salvar', { ...form });

    form.id = '';
    form.name = '';
    loading.value = false;
};


</script>
<style scoped>
/* Fade no fundo escuro */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Pop-up suave na caixa */
.popup-enter-active,
.popup-leave-active {
  transition: all 0.3s ease;
}
.popup-enter-from {
  opacity: 0;
  transform: scale(0.95);
}
.popup-leave-to {
  opacity: 0;
  transform: scale(0.95);
}
</style>