import cloneLib from 'clone'

export function clone<T>(object: T): T {
  return cloneLib(object)
}
