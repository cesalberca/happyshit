import { inject, injectable } from 'inversify'
import { GenericService } from '../../../arch/application/Generic.service'
import { SERVICE_ID } from '../../../arch/domain/serviceId'
import { User } from '../../domain/models/User.model'
import { Http } from '../http/Http'
import { HttpModel } from '../http/Http.model'
import { IUserService } from './IUser.service'

@injectable()
export class UserService extends GenericService<User.Base, Exclude<User.Base, { id: number }>> implements IUserService {
  public constructor(@inject(SERVICE_ID.Http) protected readonly http: Http, protected readonly url: HttpModel.Url) {
    super(http, url)
  }

  public async getAllUsers(): Promise<User.Base[]> {
    return await this.http.get(this.url)
  }
}
