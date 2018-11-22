export class Time {
  public get seconds(): number {
    return this._seconds
  }

  public static seconds(seconds: number): Time {
    return new Time(seconds)
  }

  private readonly _seconds: number

  public constructor(seconds: number) {
    this._seconds = seconds
  }
}
