import { WebPage } from '../WebPage'
import { container } from '../../../../../../arch/rootContainer'
import { TYPES } from '../../../../../../arch/types'
import { loggerMock } from '../../../../../../arch/logger/__mocks__/logger.mock'
import { selectorMock } from '../__mocks__/Selector.mock'
import { Selector } from '../Selector'
import { inject } from 'inversify'
import { windowMock } from '../__mocks__/Window.mock'
import { Maybe } from '../../../../../../arch/utils/Maybe'
import { noop } from '../../../../../../arch/utils/noop'

describe('WebPage', () => {
  let webPage: WebPage

  class ConcreteWebPage extends WebPage {
    public constructor(
      @inject(TYPES.Window) protected readonly window: Window,
      @inject(TYPES.Selector) protected readonly selector: Selector<Element>
    ) {
      super(window, selector)
    }
  }

  beforeEach(() => {
    container.rebind(TYPES.Logger).toConstantValue(loggerMock)
    container.rebind(TYPES.Window).toConstantValue(windowMock)
    container.rebind(TYPES.Selector).toConstantValue(selectorMock)
    container.rebind(TYPES.TwitterPage).to(ConcreteWebPage)
    webPage = container.get(TYPES.TwitterPage)
  })

  it('should wait for page to load', async () => {
    expect.assertions(1)
    await webPage.load()
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
