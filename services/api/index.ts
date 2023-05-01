import request from '@/services/axios/request'
import { ProductData } from './type'

export const requestProduct = (): Promise<ProductData> => {
  return request.get('/products')
}
