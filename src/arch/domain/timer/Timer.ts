import { Maybe } from '../Maybe'
import { Clock } from './Clock'
import { Time } from './Time'

export class Timer {
  private _time: Time = new Time(0)
  private _currentClock: Maybe<number> = Maybe.none()

  private _until: Maybe<Time> = Maybe.none()
  private _onTimerRuns: Maybe<(() => any)> = Maybe.none()

  public constructor(private readonly clock: Clock) {
    this.clock = clock
  }

  public start() {
    this._time = new Time(0)
    this._currentClock = Maybe.fromValue(
      this.clock.start(() => {
        this._time = new Time(this.time.seconds + 1)
        this.stopTimeIfNeeded()
      })
    )

    return this
  }

  public until(time: Time, onTimerRuns: () => any) {
    this._until = Maybe.fromValue(time)
    this._onTimerRuns = Maybe.fromValue(onTimerRuns)
  }

  public stop() {
    this.clock.stop(this._currentClock.getOrElse(0))
    this._currentClock = Maybe.none()
  }

  public get time(): Time {
    return this._time
  }

  private stopTimeIfNeeded() {
    if (this._time.seconds === this._until.getOrElse(Time.seconds(-1)).seconds) {
      this.stop()
      this._onTimerRuns.getOrElse(() => {})()
    }
  }
}
