import { Selector } from './Selector'
import { WebPage } from './WebPage'

export class TwitterPage extends WebPage {
  private readonly footerIcons = '.stream-item-footer .ProfileTweet-actionList'

  public constructor(private readonly selector: Selector<Element>) {
    this.selector = selector
  }

  public getAllFooters() {
    return this.selector.selectAll(this.footerIcons)
  }
}
