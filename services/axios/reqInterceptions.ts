import type { InternalAxiosRequestConfig } from 'axios'

const defaultRequestInterception = (config: InternalAxiosRequestConfig) => {
  // 在服务端请求的时候可能没有window
  // const token = localStorage.getItem('token')
  // // 设置请求头的Authorization字段为token
  // if (token) {
  //   config.headers.Authorization = `Bearer ${token}`
  // }
  return config
}

export { defaultRequestInterception }
