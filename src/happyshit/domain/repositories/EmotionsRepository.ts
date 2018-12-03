import { Repository } from '../../../arch/domain/repositories/Repository'
import { Emotion } from '../entities/Emotion.entity'

export interface EmotionsRepository extends Repository<Emotion, Emotion> {}
