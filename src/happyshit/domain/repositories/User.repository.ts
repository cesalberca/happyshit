import { Repository } from '../../../arch/domain/repositories/Repository'
import { User } from '../models/User.model'

export interface UserRepository extends Repository {
  getAllUsers: () => Promise<User.Base[]>
}
