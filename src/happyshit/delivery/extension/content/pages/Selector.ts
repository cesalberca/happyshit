import { Maybe } from '../../../../../arch/Maybe'

export type Query = string

export interface Selector<T = {}> {
  select: (query: Query) => Maybe<T>
  selectAll: (query: Query) => T[]
}
