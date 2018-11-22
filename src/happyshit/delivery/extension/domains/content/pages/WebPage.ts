import { inject, injectable } from 'inversify'
import { DELIVERY_SERVICE_ID } from '../../../deliveryServiceId'

@injectable()
export abstract class WebPage {
  protected constructor(@inject(DELIVERY_SERVICE_ID.Window) protected readonly window: Window) {
    this.window = window
  }

  public async load() {
    return new Promise(resolve => {
      this.window.addEventListener('load', () => {
        resolve()
      })
    })
  }
}
