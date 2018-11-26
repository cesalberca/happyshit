import { IService } from '../../../arch/application/services/IService'
import { User } from '../../domain/models/User.model'

export interface IUserService extends IService {
  getAllUsers: () => Promise<User.Base[]>
}
