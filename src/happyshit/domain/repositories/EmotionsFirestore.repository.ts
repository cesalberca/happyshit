import { inject, injectable } from 'inversify'
import { EmotionsRepository } from './Emotions.repository'
import { FirestoreRepository } from '../../../arch/domain/repositories/firestore/Firestore.repository'
import { Emotion } from '../entities/Emotion.entity'
import { TYPES } from '../../../arch/types'
import { Database } from '../../../arch/domain/repositories/Database'

@injectable()
export class EmotionsFirestoreRepository extends FirestoreRepository<Emotion, Emotion> implements EmotionsRepository {
  public constructor(@inject(TYPES.Database) protected readonly database: Database) {
    super(database)
    this._collection = 'emotions'
  }
}
