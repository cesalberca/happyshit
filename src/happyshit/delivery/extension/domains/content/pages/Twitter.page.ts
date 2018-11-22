import { StateContext } from '../../../../../application/states/StateContext'
import { ISelector } from './ISelector'
import { WebPage } from './WebPage'

export class TwitterPage extends WebPage {
  private readonly footerIcons = '.stream-item-footer .ProfileTweet-actionList'

  public constructor(protected readonly window: Window, private readonly selector: ISelector<Element>) {
    super(window)
    this.window = window
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
