import { Id } from '../../../arch/domain/types/main.type'
import { EmotionType } from '../valueObjects/EmotionType'
import { Count } from '../valueObjects/Count'

export class Emotion {
  private readonly _id: Id
  private readonly _emotionType: EmotionType
  private readonly _count: Count

  public constructor(id: Id, emotionType: EmotionType, count: Count) {
    this._id = id
    this._emotionType = emotionType
    this._count = count
  }

  get id(): Id {
    return this._id
  }

  get emotionType(): EmotionType {
    return this._emotionType
  }

  get count(): Count {
    return this._count
  }

  public increment(): Emotion {
    const updatedCount = this.count.increment()
    return new Emotion(this.id, this.emotionType, updatedCount)
  }
}
