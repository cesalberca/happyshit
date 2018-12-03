import { injectable } from 'inversify'
import { Emotion } from '../entities/Emotion.entity'
import { EmotionsRepository } from './Emotions.repository'
import { Id } from '../../../arch/domain/types/main.type'
import { Maybe } from '../../../arch/utils/Maybe'

@injectable()
export class EmotionsFirebaseRepository implements EmotionsRepository {
  public create(id: Id, payload: Emotion): Promise<boolean> {
    throw new Error('method not implemented')
  }

  public findAll(): Promise<Emotion[]> {
    throw new Error('method not implemented')
  }

  public findOne(id: Id): Promise<Maybe<Emotion>> {
    throw new Error('method not implemented')
  }

  public update(id: Id, payload: Emotion): Promise<boolean> {
    throw new Error('method not implemented')
  }
}
