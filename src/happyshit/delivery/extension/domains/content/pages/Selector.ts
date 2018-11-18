import { Maybe } from '../../../../../../arch/domain/Maybe'

type Query = string

export interface Selector<T> {
  select: (query: Query) => Maybe<T>
  selectAll: (query: Query) => T[]
}
