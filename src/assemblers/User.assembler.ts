import { singleton, Singleton } from '../decorators/Singleton.decorator'
import { User } from '../models/User.model'
import { IAssembler } from './IAssembler'

@singleton
class UserAssemblerSingleton
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

export const UserAssembler = (UserAssemblerSingleton as unknown) as Singleton<
  UserAssemblerSingleton
>
