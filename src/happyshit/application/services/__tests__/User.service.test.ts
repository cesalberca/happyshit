import { httpMock } from '../../http/__mocks__/http.mock'
import { UserService } from '../User.service'

describe('User.service', () => {
  let userService: UserService

  beforeEach(() => {
    userService = new UserService(httpMock, 'users')
  })

  it('should get all users', async () => {
    await userService.getAllUsers()
    expect(httpMock.get).toHaveBeenCalledWith('users')
  })
})
