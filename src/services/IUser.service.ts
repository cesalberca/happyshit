import { User } from '../models/User.model'

export interface IUserService {
  getAllUsers: () => Promise<User.Base[]>
}
