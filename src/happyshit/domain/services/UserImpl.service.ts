import { inject, injectable } from 'inversify'
import { GenericService } from '../../../arch/domain/services/Generic.service'
import { User } from '../models/User.model'
import { HttpImpl } from '../../../arch/domain/http/HttpImpl'
import { HttpModel } from '../../../arch/domain/http/Http.model'
import { TYPES } from '../../types'
import { UserService } from './User.service'

@injectable()
export class UserImplService extends GenericService<User.Base, Exclude<User.Base, { id: number }>>
  implements UserService {
  public constructor(@inject(TYPES.Http) protected readonly http: HttpImpl, protected readonly url: HttpModel.Url) {
    super(http, url)
  }

  public async getAllUsers(): Promise<User.Base[]> {
    return await this.http.get(this.url)
  }
}
