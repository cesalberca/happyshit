import { Query, Selector } from './Selector'
import { CallbackFunction, Empty } from '../../../../../arch/domain/types/main.type'
import { injectable } from 'inversify'

@injectable()
export class WebPage {
  protected constructor(protected readonly window: Window, protected readonly selector: Selector<Node>) {
    this.window = window
    this.selector = selector
  }

  public async load(): Promise<Empty> {
    return new Promise(resolve => {
      this.window.addEventListener('load', () => {
        resolve()
      })
    })
  }

  public observeElement(query: Query, callback: CallbackFunction, options = { childList: true }): MutationObserver {
    const element: Node = this.selector.select(query).getOrExecute(() => {
      throw new Error('Node not found')
    })
    callback()
    const observer = new MutationObserver(callback)
    observer.observe(element, options)
    return observer
  }
}
