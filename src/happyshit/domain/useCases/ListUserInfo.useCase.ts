import { Command } from '../../../arch/command/Command'
import { TYPES } from '../../../arch/types'
import { UserRepository } from '../repositories/User.repository'
import { inject, injectable } from 'inversify'

@injectable()
export class ListUserInfoUseCase implements Command {
  constructor(@inject(TYPES.UserRepository) private readonly userRepository: UserRepository) {}

  public async execute(): Promise<boolean> {
    await this.userRepository.getAllUsers()
    return true
  }
}
