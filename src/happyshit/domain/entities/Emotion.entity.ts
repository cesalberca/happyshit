import { Id } from '../../../arch/domain/types/main.type'
import { Reaction } from '../valueObjects/Reaction.entity'

export class Emotion {
  public constructor(private readonly _id: Id, private readonly _reactions: Reaction[]) {}

  get id(): Id {
    return this._id
  }

  get reactions(): Reaction[] {
    return this._reactions
  }

  public react(): Emotion {
    return new Emotion('1', [])
  }
}
