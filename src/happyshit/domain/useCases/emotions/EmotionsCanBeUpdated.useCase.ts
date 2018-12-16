import { Command } from '../../../../arch/command/Command'
import { inject, injectable } from 'inversify'
import { TYPES } from '../../../../arch/types'
import { Emotion } from '../../entities/Emotion.entity'
import { Maybe } from '../../../../arch/utils/Maybe'
import { EmotionsRepository } from '../../repositories/Emotions.repository'

@injectable()
export class EmotionsCanBeUpdatedUseCase implements Command<Emotion> {
  private emotion: Maybe<Emotion> = Maybe.none()

  constructor(@inject(TYPES.EmotionsRepository) private readonly emotionsRepository: EmotionsRepository) {}

  public setEmotion(emotion: Emotion): EmotionsCanBeUpdatedUseCase {
    this.emotion = Maybe.fromValue(emotion)
    return this
  }

  public async execute(): Promise<Emotion> {
    const emotionToBeUpdated = this.emotion.getOrExecute(() => {
      throw new Error('Emotion should be set')
    })

    const emotion: Maybe<Emotion> = await this.emotionsRepository.findOne(emotionToBeUpdated.id)

    const foundEmotion = emotion.getOrExecute(() => {
      throw new Error('Emotion could not be found')
    })

    const updatedEmotion = foundEmotion.increment()
    await this.emotionsRepository.update(emotionToBeUpdated.id, updatedEmotion)
    return (await this.emotionsRepository.findOne(emotionToBeUpdated.id)).getOrExecute(() => {
      throw new Error('Updated emotion could not be found')
    })
  }
}
