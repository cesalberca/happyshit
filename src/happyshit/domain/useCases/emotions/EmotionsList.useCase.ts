import { Command } from '../../../../arch/command/Command'
import { inject, injectable } from 'inversify'
import { TYPES } from '../../../../arch/types'
import { Emotion } from '../../entities/Emotion.entity'
import { EmotionsRepository } from '../../repositories/Emotions.repository'

@injectable()
export class EmotionsListUseCase implements Command<Emotion[]> {
  constructor(@inject(TYPES.EmotionsRepository) private readonly emotionsRepository: EmotionsRepository) {
    this.emotionsRepository = emotionsRepository
  }

  public async execute(): Promise<Emotion[]> {
    return this.emotionsRepository.findAll()
  }
}
