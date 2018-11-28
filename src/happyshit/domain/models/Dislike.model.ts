import { Id } from '../../../arch/domain/types/main.type'

export class Dislike {
  private readonly _id: Id
  private readonly _date: Date

  public constructor(id: Id, date: Date) {
    this._id = id
    this._date = date
  }

  get id(): Id {
    return this._id
  }

  get date(): Date {
    return this._date
  }

  get isoDate(): string {
    return this._date.toISOString()
  }
}
