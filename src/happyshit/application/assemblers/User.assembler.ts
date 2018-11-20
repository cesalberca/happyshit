import { User } from '../../domain/models/User.model'
import { IAssembler } from './IAssembler'

export class UserAssembler
  implements IAssembler<User.Base, User.AssembledNames> {
  public assemble(original: User.Base): User.AssembledNames {
    return {
      fullName: `${original.name} ${original.lastname.getOrElse('')}`,
      id: original.id,
    }
  }

  public assembleAll(originals: User.Base[]): User.AssembledNames[] {
    return originals.map(this.assemble)
  }
}
