import { inject, injectable } from 'inversify'
import { Selector, Query } from './Selector'
import { CallbackFunction, Empty } from '../../../../../arch/domain/types/main.type'
import { TYPES } from '../../../../../arch/types'

@injectable()
export abstract class WebPage {
  protected constructor(
    @inject(TYPES.Window) protected readonly window: Window,
    @inject(TYPES.Selector) protected readonly selector: Selector<Node>
  ) {
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
