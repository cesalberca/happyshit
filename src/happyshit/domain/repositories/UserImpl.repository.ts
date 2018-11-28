import { inject, injectable } from 'inversify'
import { HttpRepository } from '../../../arch/domain/repositories/http/Http.repository'
import { User } from '../models/User.model'
import { HttpModel } from '../../../arch/domain/repositories/http/Http.model'
import { TYPES } from '../../../arch/types'
import { UserRepository } from './User.repository'
import { Http } from '../../../arch/domain/repositories/http/Http'

@injectable()
export class UserImplRepository extends HttpRepository<User.Base, User.Base> implements UserRepository {
  public constructor(
    @inject(TYPES.Http) protected readonly http: Http<User.Base, User.Base>,
    protected readonly url: HttpModel.Url
  ) {
    super(http, url)
  }

  public async getAllUsers(): Promise<User.Base[]> {
    return this.http.get(this.url) as Promise<User.Base[]>
  }
}
