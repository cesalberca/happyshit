import { inject, injectable } from 'inversify'
import { EmotionsRepository } from './Emotions.repository'
import { FirebaseRepository } from '../../../arch/domain/repositories/firebase/Firebase.repository'
import { TYPES } from '../../../arch/types'
import { Emotion } from '../entities/Emotion.entity'
import { Firestore } from '../../../arch/rootContainer'

@injectable()
export class EmotionsFirebaseRepository extends FirebaseRepository<Emotion, Emotion> implements EmotionsRepository {
  public constructor(@inject(TYPES.Database) protected readonly database: Firestore) {
    super(database, 'emotions')
    this.database = database
  }
}
