import { Maybe } from '../../Maybe'
import { Id } from '../types/main.type'

export interface Repository<T = {}, U = {}> {
  findOne(id: Id): Promise<Maybe<T>>
  findAll(): Promise<T[]>
  create(id: Id, payload: U): Promise<boolean>
  update(id: Id, payload: U): Promise<boolean>
}
