import api from "./axios";

export const getTickets = (param) => api.get('tickets',{
    params: param
})

export const createTicket = (data) => api.post(`/tickets/`, data)

export const editTicket = (id, data) => api.put(`/tickets/${id}`, data)

export const deleteTicket = (id) => api.delete(`/tickets/${id}`)