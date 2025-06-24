<template>
  <div>
    <div class="flex items-center justify-between p-6  mb-0 pb-0">
      <h1 class="text-2xl font-bold">Categoria</h1>
      <button @click="abrirModal()" class="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-500">
        Nova Categoria
      </button>
    </div>

    <div class="p-6">
    
    <CategoryFilters 
      @filtrar="aplicarFiltros" 
    />

    <CategoriaList 
      :categorias="categorias" 
      @atualizar="listaCategorias"
      @excluir="deletaCategoria"
    />

    <Form
      :show="mostrarModal"
      title="Cadastrar Nova Categoria"
      @fechar="fecharModal"
      @salvar="novaCategoria"
    />
    </div>
  </div>
</template>

<script setup>

import { ref, onMounted } from 'vue'
import { useAlert }     from '@/utils/alert.js'
import CategoryFilters  from '@/components/categoria/CategoryFilters.vue'
import  CategoriaList   from '@/components/categoria/CategoryListagem.vue'
import  Form            from '@/components/categoria/CategoryForm.vue'
import { getCategory, createCategory, deleteCategory } from '@/api/CategoryApi.js'

const categorias = ref([])
const mostrarModal = ref(false)

const { success, error, confirm } = useAlert()

const abrirModal  = () => { mostrarModal.value = true }
const fecharModal = () => { mostrarModal.value = false }

const novaCategoria = async (form) => {
  try {
    await createCategory(form)
    await listaCategorias()
    await fecharModal()

    success('Cadastrado com sucesso!')
  } catch (e) {
    console.log('Erro ao salvar nova categoria:', e)
    error('Erro ao carregar categorias')
  }
}

const deletaCategoria = async (categoria) => {
  try {
    const result = await confirm(
      'Deseja realmente excluir?',
      'Essa ação não pode ser desfeita'
    );

    if (result.isConfirmed) {
      await deleteCategory(categoria.id);
      await listaCategorias();
      success('Item excluído com sucesso!');
    } else {
      error('Ação cancelada');
    }

  } catch (e) {
    console.error(e);
    error(e.response.data.message);
  }
}

const listaCategorias = async (categoriaFiltro) => {
  try {

    const response = await getCategory(categoriaFiltro)
    categorias.value = response.data.data.data
  } catch (e) {
    console.error('Erro ao carregar categorias:', e)
    error('Erro ao carregar categorias')
  }
}

const aplicarFiltros = (filtros = {}) => {

  const filtro = {}
  console.log(filtros.name.length);
  
  if (filtros.name.length >= 3) filtro.name = filtros.name
  filtro.page = filtros.page || 1

  //const temFiltros = Object.keys(filtro).some(key => key !== 'page')

  console.log(filtro)
 
  listaCategorias(filtro)
}

onMounted(() => {
  listaCategorias()
})
</script>