export class Count {
  private readonly _value: number

  constructor(count: number = 0) {
    this._value = count
  }

  public get value(): number {
    return this._value
  }

  public increment(): Count {
    return new Count(this.value + 1)
  }

  public decrement(): Count {
    if (this.value - 1 < 0) {
      throw new Error("Count can't be negative")
    }
    return new Count(this.value - 1)
  }
}
