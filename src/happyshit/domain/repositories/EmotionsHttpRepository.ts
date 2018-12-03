import { inject, injectable } from 'inversify'
import { HttpRepository } from '../../../arch/domain/repositories/http/Http.repository'
import { TYPES } from '../../../arch/types'
import { Http } from '../../../arch/domain/repositories/http/Http'
import { Emotion } from '../entities/Emotion.entity'
import { HttpModel } from '../../../arch/domain/repositories/http/Http.model'
import { Repository } from '../../../arch/domain/repositories/Repository'

@injectable()
export class EmotionsHttpRepository extends HttpRepository<Emotion, Emotion> implements Repository {
  public constructor(
    @inject(TYPES.Http) protected readonly http: Http<Emotion, Emotion>,
    protected readonly url: HttpModel.Url
  ) {
    super(http, url)
  }
}
