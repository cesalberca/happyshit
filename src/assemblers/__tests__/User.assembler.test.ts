import { User } from '../../models/User.model'
import { Maybe } from '../../monads/Maybe'
import { UserAssembler } from '../User.assembler'

describe('User.assembler', () => {
  it('should assemble name and lastname', () => {
    const user: User.Base = {
      name: 'name',
      lastname: Maybe.some('lastname'),
      id: 0,
    }

    const result = UserAssembler.getInstance().assemble(user)

    const expected: User.AssembledNames = {
      id: 0,
      fullName: 'name lastname',
    }

    expect(result).toEqual(expected)
  })
})
