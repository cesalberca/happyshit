import { EmotionType } from './EmotionType'

export class Reaction {
  constructor(private readonly _date: Date, private readonly _type: EmotionType) {}

  get date(): Date {
    return this._date
  }

  get type(): EmotionType {
    return this._type
  }
}
