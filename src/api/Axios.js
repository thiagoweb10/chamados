import axios from "axios"
import { useAlert } from '@/utils/alert.js'
import { useAuthStore } from '@/stores/auth';

const { warning } = useAlert()

const api = axios.create({
    baseURL:'http://127.0.0.1:8000/api/',
    headers:{
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
})

api.interceptors.request.use(
  (config) => {
    const auth = useAuthStore();

    if (auth.token) {
      config.headers.Authorization = `Bearer ${auth.token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      warning('Atenção - Token inválido ou expirado');
      useAuthStore().logout();
    }

    return Promise.reject(error);
  }
);

export default api