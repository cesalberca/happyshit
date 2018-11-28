import { httpMock } from '../../../../arch/domain/repositories/http/__mocks__/http.mock'
import { UserImplRepository } from '../UserImpl.repository'
import { UserRepository } from '../User.repository'
import { Http } from '../../../../arch/domain/repositories/http/Http'
import { User } from '../../models/User.model'

describe('User.repository', () => {
  let userRepository: UserRepository

  beforeEach(() => {
    userRepository = new UserImplRepository((httpMock as unknown) as Http<User.Base, User.Base>, 'users')
  })

  it('should get all users', async () => {
    await userRepository.getAllUsers()
    expect(httpMock.get).toHaveBeenCalledWith('users')
  })
})
