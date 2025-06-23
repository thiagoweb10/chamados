import api from "./Axios";

export const getCategory = (param) => api.get('categories',{
    params: param
})

export const createCategory  = (data) => api.post(`/categories/`, data)

export const deleteCategory = (id) => api.delete(`/categories/${id}`)
