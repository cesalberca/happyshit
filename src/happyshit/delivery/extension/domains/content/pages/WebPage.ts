import { Time, Timer } from '../../../../../../arch/timer'

export abstract class WebPage {
  protected constructor(private readonly window: Window) {
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
