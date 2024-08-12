
import { Api } from '../core/services/apiService'
import axiosClient from 'axios'

const axios = axiosClient.create({
  baseURL: import.meta.env.VITE_API_ENDPOINT+'/api',
})

axios.interceptors.request.use(config => {
  const token = JSON.parse(localStorage.getItem('accessToken') || 'null')
  if (token) {
    config.headers = config.headers || {}
    config.headers.Authorization = token ? `Bearer ${token}` : ''
  }
  
  return config
})
axios.interceptors.response.use(
  response => {
    return response.data
  },
  error => {
    console.log(error?.response?.data)

    const finalError = error?.response?.data ? error.response?.data : error
    
    return Promise.reject(finalError)
  })

const api = new Api()

api.instance = axios

export { api, axios }
