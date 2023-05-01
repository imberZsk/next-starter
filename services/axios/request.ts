import axios, { AxiosInstance } from 'axios'
import { errorHandle, processData, successHandle } from './resInterceptions'
import { defaultRequestInterception } from './reqInterceptions'
const TIMEOUT = 5 * 1000

class Request {
  instance: AxiosInstance
  constructor() {
    this.instance = axios.create()
    this.init()
  }

  private init() {
    this.setDefaultConfig()
    this.reqInterceptions()
    this.resInterceptions()
  }
  private setDefaultConfig() {
    this.instance.defaults.baseURL = 'https://dummyjson.com'
    this.instance.defaults.timeout = TIMEOUT
  }
  private reqInterceptions() {
    this.instance.interceptors.request.use(defaultRequestInterception)
  }
  private resInterceptions() {
    this.instance.interceptors.response.use(processData)
    this.instance.interceptors.response.use(successHandle, errorHandle)
  }
}

export default new Request().instance
