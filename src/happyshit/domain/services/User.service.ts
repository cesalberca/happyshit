import { Service } from '../../../arch/domain/services/Service'
import { User } from '../models/User.model'

export interface UserService extends Service {
  getAllUsers: () => Promise<User.Base[]>
}
