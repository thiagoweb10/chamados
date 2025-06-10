import api from "./axios";

export const list = (param) => api.get('categories',{
    params: param
})

export const create  = (data) => api.post(`/categories/`, data)

export const destroy = (id) => api.delete(`/categories/${id}`)
