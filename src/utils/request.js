import axios from 'axios'
import { Message } from 'element-ui'
import store from '@/store'
import { getToken } from '@/utils/auth'
// 创建请求实例 axios
const service = axios.create({
  baseURL: process.env.BASE_API,
  timeout: 5000
})

// 请求会先拦截token
service.interceptors.request.use(config => {
  if (store.getters.token) {
    config.headers['X-Token'] = getToken()
  }
  return config
}, error => {
  console.log(error)
  Promise.reject(error)
})

// 响应式请求拦截
service.interceptors.request.use(
  respons => respons,
  error => {
    Message({
      message: error.message,
      type: 'error',
      duration: 3
    })
    return Promise.reject(error)
  })
export default service
