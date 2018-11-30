export interface Strategy<T = {}, U = {}> {
  check: (predicate: T) => boolean
  execute: () => U
}
