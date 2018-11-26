import { httpMock } from '../../../../arch/domain/http/__mocks__/http.mock'
import { UserImplService } from '../UserImpl.service'

describe('User.service', () => {
  let userService: UserImplService

  beforeEach(() => {
    userService = new UserImplService(httpMock, 'users')
  })

  it('should get all users', async () => {
    await userService.getAllUsers()
    expect(httpMock.get).toHaveBeenCalledWith('users')
  })
})
