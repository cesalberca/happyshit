import { Maybe } from '../../../../../../arch/domain/Maybe'

type Query = string

export interface ISelector<T = {}> {
  select: (query: Query) => Maybe<T>
  selectAll: (query: Query) => T[]
}
