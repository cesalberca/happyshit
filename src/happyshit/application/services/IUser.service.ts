import { IService } from '../../../arch/application/IService'
import { User } from '../../domain/models/User.model'

export interface IUserService extends IService {
  getAllUsers: () => Promise<User.Base[]>
}
