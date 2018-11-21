import { Maybe } from '../domain/Maybe'

export interface Service<T, U> {
  findOne(id: Http.Id): Promise<Maybe<T>>
  findAll(): Promise<T[]>
  create(id: Http.Id, payload: U): Promise<Http.Response>
  update(id: Http.Id, payload: U): Promise<Http.Response>
}
