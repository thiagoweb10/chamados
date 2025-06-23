import api from "./Axios";

export const getAuthenticate = (credentials) => api.post('login', credentials)

export const getMe = (headers) => api.get('me')