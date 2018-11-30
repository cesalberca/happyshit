import { useState } from 'react'
import { StateContext } from '../states/StateContext'

export const useProxy = <T>(objectToBeProxified: object): T => {
  const [proxifiedObject, setProxifiedObject] = useState(objectToBeProxified)

  const proxy = new Proxy(proxifiedObject, {
    set(target: StateContext, p: PropertyKey, value: any, receiver: any): boolean {
      setProxifiedObject(target)
      return Reflect.set(target, p, value, receiver)
    },
  })

  return (proxy as unknown) as T
}
