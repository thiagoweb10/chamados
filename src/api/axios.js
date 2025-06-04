import axios from "axios"

const api = axios.create({
    baseURL:'',
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