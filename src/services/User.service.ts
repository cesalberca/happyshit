import { Http } from '../http/Http'
import { User } from '../models/User.model'
import { IUserService } from './IUser.service'

export class UserService implements IUserService {
  constructor(
    private readonly http: Http<User.Base, Exclude<User.Base, { id: number }>>,
    private readonly url: string
  ) {
    this.http = http
    this.url = url
  }

  public getAllUsers(): Promise<User.Base[]> {
    return this.http.get(this.url)
  }
}
