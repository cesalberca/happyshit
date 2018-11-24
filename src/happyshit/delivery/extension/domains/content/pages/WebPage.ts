import { inject, injectable } from 'inversify'
import { ISelector, Query } from './ISelector'
import { CallbackFunction } from '../../../../../domain/types/main.type'
import { TYPES } from '../../../../../types'

@injectable()
export abstract class WebPage {
  protected constructor(
    @inject(TYPES.Window) protected readonly window: Window,
    @inject(TYPES.Selector) protected readonly selector: ISelector<Node>
  ) {
    this.window = window
    this.selector = selector
  }

  public async load() {
    return new Promise(resolve => {
      this.window.addEventListener('load', () => {
        resolve()
      })
    })
  }

  public observeElement(query: Query, callback: CallbackFunction, options = { childList: true }) {
    const element: Node = this.selector.select(query).getOrExecute(() => {
      throw new Error('Node not found')
    })
    const observer = new MutationObserver(callback)
    observer.observe(element, options)
    return observer
  }
}
