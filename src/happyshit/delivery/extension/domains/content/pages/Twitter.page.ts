import { inject, injectable } from 'inversify'
import { StateContext } from '../../../../../application/states/StateContext'
import { DELIVERY_SERVICE_ID } from '../../../deliveryServiceId'
import { ISelector } from './ISelector'
import { WebPage } from './WebPage'
import { APPLICATION_SERVICE_ID } from '../../../../../application/applicationServiceId'
import { ILogger } from '../../../../../../arch/domain/logger/ILogger'

@injectable()
export class TwitterPage extends WebPage {
  private readonly footerIcons = '.stream-item-footer .ProfileTweet-actionList'

  public constructor(
    @inject(DELIVERY_SERVICE_ID.Window) protected readonly window: Window,
    @inject(DELIVERY_SERVICE_ID.Selector) private readonly selector: ISelector<Element>,
    @inject(APPLICATION_SERVICE_ID.Logger) private readonly logger: ILogger
  ) {
    super(window)
    this.selector = selector
    this.logger = logger
  }

  public async getAllFooters() {
    try {
      await this.load()
      this.logger.log('Returning found footers')
      return this.selector.selectAll(this.footerIcons)
    } catch (e) {
      StateContext.instance.error()
      throw new Error('Could not find the selector')
    }
  }
}
