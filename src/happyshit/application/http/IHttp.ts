import { HttpModel } from './Http.model'

export interface IHttp<T = {}, U = {}> {
  get: (url: string) => Promise<T>
  post: (url: string, payload: U) => Promise<HttpModel.Response>
  put: (url: string, payload: U) => Promise<HttpModel.Response>
}
