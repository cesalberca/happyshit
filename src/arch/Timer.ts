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

export interface Clock {
  start: any
  stop: (id: number) => void
}

export class Timer {
  private _time: Time = new Time(0)
  private currentClock: number | undefined

  private _until: Time | undefined
  private _onTimerRuns: (() => any) | undefined

  public constructor(private readonly clock: Clock) {
    this.clock = clock
  }

  public start() {
    this._time = new Time(0)
    this.currentClock = this.clock.start(() => {
      this._time = new Time(this.time.seconds + 1)
      this.shouldStopTime()
    })

    return this
  }

  public until(time: Time, onTimerRuns: () => any) {
    this._until = time
    this._onTimerRuns = onTimerRuns
  }

  public stop() {
    this.clock.stop(this.currentClock as number)
    this.currentClock = undefined
  }

  public get time(): Time {
    return this._time
  }

  private shouldStopTime() {
    if (this._until && this._time.seconds === this._until.seconds) {
      this.stop()
      this._onTimerRuns!()
    }
  }
}
