<template>
  <div>
    <h1 class="text-2xl font-bold">Categorias</h1>
    <br />
    
    <button @click="abrirModal" class="bg-green-600 text-white px-4 py-2 rounded">
      Novo Cadastro
    </button>

    <br />

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
</template>

<script setup>

import { ref, onMounted } from 'vue'
import { useAlert }     from '@/utils/alert.js'
import  CategoriaList   from '../components/categoria/Listagem.vue'
import  Form            from '@/components/categoria/Form.vue'
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
    error('Erro ao deletar registro: ' + e);
  }
}

const listaCategorias = async (categoriaFiltro) => {
  try {

    let params = {
      name : categoriaFiltro ?? null
    }

     console.log('valor da variavel categoriaFiltro:'+categoriaFiltro);

    console.log('valor do indice nome:'+params.name);

    const response = await getCategory(params)

    console.log(response);
    
    categorias.value = response.data.data.data
  } catch (e) {
    console.error('Erro ao carregar categorias:', e)
    error('Erro ao carregar categorias')
  }
}

onMounted(() => {
  listaCategorias()
})
</script>