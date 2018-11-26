import { inject, injectable } from 'inversify'
import { GenericService } from '../../../arch/application/services/Generic.service'
import { User } from '../../domain/models/User.model'
import { Http } from '../../../arch/application/http/Http'
import { HttpModel } from '../../../arch/application/http/Http.model'
import { TYPES } from '../../types'
import { IUserService } from './IUser.service'

@injectable()
export class UserService extends GenericService<User.Base, Exclude<User.Base, { id: number }>> implements IUserService {
  public constructor(@inject(TYPES.Http) protected readonly http: Http, protected readonly url: HttpModel.Url) {
    super(http, url)
  }

  public async getAllUsers(): Promise<User.Base[]> {
    return await this.http.get(this.url)
  }
}
