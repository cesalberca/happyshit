import { CallbackFunction } from '../domain/types/main.type'

export class Maybe<T> {
  public static some<T>(value: T): Maybe<T> {
    if (!value) {
      throw Error('Provided value must not be empty')
    }
    return new Maybe(value)
  }

  public static none<T>(): Maybe<T> {
    return new Maybe<T>(null)
  }

  public static fromValue<T>(value: T): Maybe<T> {
    return value ? Maybe.some(value) : Maybe.none<T>()
  }

  private constructor(private value: T | null) {}

  public getOrElse(defaultValue: T): T {
    return this.value === null ? defaultValue : this.value
  }

  public getOrExecute(defaultValue: CallbackFunction<T>): T {
    return this.value === null ? defaultValue() : this.value
  }

  public map<R>(f: (wrapped: T) => R): Maybe<R> {
    if (this.value === null) {
      return Maybe.none<R>()
    } else {
      return Maybe.some(f(this.value))
    }
  }

  public flatMap<R>(f: (wrapped: T) => Maybe<R>): Maybe<R> {
    if (this.value === null) {
      return Maybe.none<R>()
    } else {
      return f(this.value)
    }
  }
}
