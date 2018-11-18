import { User } from '../../domain/models/User.model'

export interface IUserService {
  getAllUsers: () => Promise<User.Base[]>
}
