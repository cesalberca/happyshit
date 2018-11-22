import { User } from '../../../domain/models/User.model'
import { Http } from '../../http/Http'
import { UserService } from '../User.service'

jest.mock('../../http/HttpModel')

describe('User.service', () => {
  let http: Http<User.Base, unknown>

  beforeEach(() => {
    http = new Http(jest.fn())
  })

  it('should get all users', async () => {
    const userService = new UserService(http, 'users')
    await userService.getAllUsers()
    expect(http.get).toHaveBeenCalledWith('users')
  })
})
