import { inject, injectable } from 'inversify'
import { WebPage } from './WebPage'
import { TYPES } from '../../../../types'
import { Logger } from '../../../../../arch/logger/Logger'
import { Selector } from './Selector'

@injectable()
export class TwitterPage extends WebPage {
  private readonly footerIcons = '.stream-item-footer .ProfileTweet-actionList'

  public constructor(
    @inject(TYPES.Window) protected readonly window: Window,
    @inject(TYPES.Selector) protected readonly selector: Selector<Element>,
    @inject(TYPES.Logger) private readonly logger: Logger
  ) {
    super(window, selector)
    this.logger = logger
  }

  public async getAllFooters() {
    this.logger.log('Returning found footers')
    return this.selector.selectAll(this.footerIcons)
  }
}
