import { Maybe } from '../monads/Maybe'
import { Id } from '../types/main.type'

export namespace User {
  export interface Base {
    id: Id
    name: string
    lastname: Maybe<string>
  }

  export interface AssembledNames {
    id: Id
    fullName: string
  }
}
