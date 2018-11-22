import { inject, injectable } from 'inversify'
import { StateContext } from '../../../../../application/states/StateContext'
import { DELIVERY_SERVICE_ID } from '../../../deliveryServiceId'
import { ISelector } from './ISelector'
import { WebPage } from './WebPage'

@injectable()
export class TwitterPage extends WebPage {
  private readonly footerIcons = '.stream-item-footer .ProfileTweet-actionList'

  public constructor(
    @inject(DELIVERY_SERVICE_ID.Window) protected readonly window: Window,
    @inject(DELIVERY_SERVICE_ID.Selector) private readonly selector: ISelector<Element>
  ) {
    super(window)
    this.selector = selector
  }

  public async getAllFooters() {
    try {
      await this.load()
      return this.selector.selectAll(this.footerIcons)
    } catch (e) {
      StateContext.instance.error()
      throw new Error('Could not find the selector')
    }
  }
}
