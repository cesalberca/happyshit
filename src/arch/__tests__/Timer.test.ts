import { Clock, Time, Timer } from '../Timer'

describe('Timer', () => {
  let timer: Timer
  let clock: Clock

  beforeEach(() => {
    jest.useFakeTimers()
    clock = {
      start: setInterval,
      stop: clearInterval,
    }
    timer = new Timer(clock)
  })

  it('should have an initial value', () => {
    expect(timer.time.seconds).toBe(0)
  })

  it('should increase the time when clock is ticked', () => {
    timer.start()
    jest.runOnlyPendingTimers()
    timer.stop()
    expect(timer.time.seconds).toBe(1)
  })

  it('should execute callback when clock runs out of time', () => {
    const onTimersEnd = jest.fn()
    timer.start().until(Time.seconds(1), onTimersEnd)
    jest.runOnlyPendingTimers()
    expect(onTimersEnd).toHaveBeenCalled()
  })
})
