import axios from "axios"

const api = axios.create({
    baseURL:'http://127.0.0.1:8000/api/',
    headers:{
        'content-Type': 'application/json',
    },
})

api.interceptors.response.use(
    response => response,
    error => {
        if(error.response?.status === 401){
            console.log('Não autorizado')
        }

        return Promise.reject(error)
    }

)

export default api