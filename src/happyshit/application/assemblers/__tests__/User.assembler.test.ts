import { User } from '../../../domain/models/User.model'
import { Maybe } from '../../../../arch/domain/Maybe'
import { UserAssembler } from '../User.assembler'

describe('User.assembler', () => {
  it('should assemble name and lastname', () => {
    const user: User.Base = {
      name: 'name',
      lastname: Maybe.some('lastname'),
      id: 0,
    }

    const result = UserAssembler.instance.assemble(user)

    const expected: User.AssembledNames = {
      id: 0,
      fullName: 'name lastname',
    }

    expect(result).toEqual(expected)
  })
})
