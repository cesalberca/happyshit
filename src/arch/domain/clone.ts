import cloneDepdency from 'clone'

export function clone<T>(object: T): T {
  return cloneDepdency(object)
}
