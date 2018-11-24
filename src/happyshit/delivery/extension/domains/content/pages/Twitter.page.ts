import { inject, injectable } from 'inversify'
import { WebPage } from './WebPage'
import { TYPES } from '../../../../../types'
import { ILogger } from '../../../../../../arch/domain/logger/ILogger'
import { ISelector } from './ISelector'

@injectable()
export class TwitterPage extends WebPage {
  private readonly footerIcons = '.stream-item-footer .ProfileTweet-actionList'

  public constructor(
    @inject(TYPES.Window) protected readonly window: Window,
    @inject(TYPES.Selector) protected readonly selector: ISelector<Element>,
    @inject(TYPES.Logger) private readonly logger: ILogger
  ) {
    super(window, selector)
    this.logger = logger
  }

  public async getAllFooters() {
    this.logger.log('Returning found footers')
    return this.selector.selectAll(this.footerIcons)
  }
}
