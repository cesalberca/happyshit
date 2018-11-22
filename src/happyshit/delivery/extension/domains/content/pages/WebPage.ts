import { Time } from '../../../../../../arch/domain/timer/Time'
import { Timer } from '../../../../../../arch/domain/timer/Timer'

export abstract class WebPage {
  protected constructor(protected readonly window: Window) {
    this.window = window
  }

  public async load() {
    return new Promise((resolve, reject) => {
      this.window.addEventListener('load', async () => {
        await new Timer({
          start: window.setInterval,
          stop: window.clearInterval,
        })
          .start()
          .until(Time.seconds(45), reject)
        resolve()
      })
    })
  }
}
