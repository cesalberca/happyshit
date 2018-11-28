import { Maybe } from '../../../arch/Maybe'
import { Id } from '../../../arch/domain/types/main.type'

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
