import { HttpModel } from '../http/Http.model'
import { Maybe } from '../../Maybe'

export interface Service<T = {}, U = {}> {
  findOne(id: HttpModel.Id): Promise<Maybe<T>>
  findAll(): Promise<T[]>
  create(id: HttpModel.Id, payload: U): Promise<HttpModel.Response>
  update(id: HttpModel.Id, payload: U): Promise<HttpModel.Response>
}