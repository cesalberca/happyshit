import { WebPage } from '../WebPage'
import { container } from '../../../../../../rootContainer'
import { TYPES } from '../../../../../../types'
import { loggerMock } from '../../../../../../../arch/domain/logger/__mocks__/logger.mock'
import { selectorMock } from '../__mocks__/Selector.mock'
import { ISelector } from '../ISelector'
import { inject } from 'inversify'
import { windowMock } from '../__mocks__/Window.mock'
import { Maybe } from '../../../../../../../arch/domain/Maybe'
import { noop } from '../../../../../../../arch/domain/noop'

describe('WebPage', () => {
  let webPage: WebPage

  class ConcreteWebPage extends WebPage {
    public constructor(
      @inject(TYPES.Window) protected readonly window: Window,
      @inject(TYPES.Selector) protected readonly selector: ISelector<Element>
    ) {
      super(window, selector)
    }
  }

  beforeEach(() => {
    container.rebind(TYPES.Logger).toConstantValue(loggerMock)
    container.rebind(TYPES.Window).toConstantValue(windowMock)
    container.rebind(TYPES.Selector).toConstantValue(selectorMock)
    container.rebind(TYPES.WebPage).to(ConcreteWebPage)
    webPage = container.get<WebPage>(TYPES.WebPage)
  })

  it('should wait for page to load', () => {
    webPage.load()
    expect(windowMock.addEventListener).toHaveBeenCalledWith('load', expect.any(Function))
  })

  it('should observe element', () => {
    ;(selectorMock.select as jest.Mock).mockReturnValue(Maybe.fromValue('foo'))
    const observeMock = jest.fn()
    ;(global as any).MutationObserver = class {
      public observe = observeMock
    }

    webPage.observeElement('test', noop)
    expect(observeMock).toHaveBeenCalledWith('foo', { childList: true })
  })
})
