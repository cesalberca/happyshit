import { HttpModel } from '../../happyshit/application/http/Http.model'
import { Maybe } from '../domain/Maybe'

export interface IService<T = {}, U = {}> {
  findOne(id: HttpModel.Id): Promise<Maybe<T>>
  findAll(): Promise<T[]>
  create(id: HttpModel.Id, payload: U): Promise<HttpModel.Response>
  update(id: HttpModel.Id, payload: U): Promise<HttpModel.Response>
}
