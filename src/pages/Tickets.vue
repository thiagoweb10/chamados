<template>
  <div>
    <div class="flex items-center justify-between p-6  mb-0 pb-0">
      <h1 class="text-2xl font-bold">Tickets</h1>
      <button @click="abrirModal()" class="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-500">
        Novo Ticket
      </button>
    </div>
    
    <div class="p-6">
      <TicketFilters 
        @filtrar="aplicarFiltros" 
      />

      <ticket-list 
        :tickets="tickets"
        :loading="loading"
        @abrir="abrirModal"
        @atualizar="listaTickets"
        @excluir="deletaTicket"
      />

      <ticket-pagination
        :meta="pagination"
        @change="listaTickets"
      />

      <ticket-form
        :show="mostrarModal"
        title="Cadastrar Novo Ticket"
        :ticket="ticketEdit"
        @fechar="fecharModal"
        @salvar="salvarTicket"
      />
    </div>

  </div>
</template>
<script setup>
import { ref, onMounted, reactive } from 'vue'
import  TicketFilters     from '@/components/ticket/TicketFilters.vue'
import  TicketList        from '@/components/ticket/TicketList.vue'
import  TicketForm        from '@/components/ticket/TicketForm.vue'
import  TicketPagination  from '@/components/ticket/TicketPagination.vue'
import { getTickets, createTicket, editTicket, deleteTicket } from '@/api/TicketApi.js'
import { useAlert }       from '@/utils/alert.js'

const { success, error, confirm } = useAlert()

const tickets = ref([])
const loading = ref(false)
const ticketEdit = ref({})
const dataTicketFilters = reactive({
  title: '',
  status: '',
  category_id: '',
  page: 1
})
const mostrarModal = ref(false)

const pagination = ref({
  current_page: 1,
  last_page: 1
})

const abrirModal  = (ticket) => {
  ticketEdit.value = ticket ?? {}
  mostrarModal.value = true 
}

const fecharModal = () => { mostrarModal.value = false }

const aplicarFiltros = (filtros = {}) => {

  Object.assign(dataTicketFilters, filtros)

  const filtro = {}
  
  if (dataTicketFilters.title.length >= 3) filtro.title = dataTicketFilters.title
  if (dataTicketFilters.status) filtro.status = dataTicketFilters.status
  if (dataTicketFilters.category_id) filtro.category_id = dataTicketFilters.category_id
  filtro.page = dataTicketFilters.page

  const temFiltros = Object.keys(filtro).some(key => key !== 'page')
   
   


  if (temFiltros) {
    console.log('entrou')
    listaTickets()
  }
   
  
}

const salvarTicket = async (form) => {
  const isEdicao = !!form.id

  try {
    const operacao = isEdicao ? editTicket(form.id, form) : createTicket(form)
    await operacao
    
    fecharModal()
    await listaTickets()
    
    success(isEdicao ? 'Ticket alterado com sucesso!' : 'Ticket cadastrado com sucesso!')

  } catch (e) {
    error(`Erro ao carregar categorias:${e}`)
  }
}

const deletaTicket = async (ticket) => {
  
  try {
    const { isConfirmed } = await confirm(
      'Deseja realmente excluir?',
      'Essa ação não pode ser desfeita'
    )

    if (!isConfirmed) {
      return error('Ação cancelada')
    }

    await deleteTicket(ticket.id);
    await listaTickets();

    success('Ticket excluído com sucesso!')
  } catch (e) {
    console.error(e);
    error('Erro ao deletar registro: ' + e);
  }
}

const listaTickets = async (pagina = 1) => {
  dataTicketFilters.page = pagina
  loading.value = true
  try {
      const response = await getTickets(dataTicketFilters)
      atualizarListaTickets(response)
  } catch (e) {
    console.error('Erro ao carregar tickets:', e)
  } finally {
    loading.value = false
  }
}

const atualizarListaTickets = (response) => {
  console.log(response)
  tickets.value = response.data.data.data

  pagination.value = {
    current_page: response.data.data.current_page,
    last_page: response.data.data.last_page
  }
}

onMounted(() => {
  listaTickets()
})
</script>