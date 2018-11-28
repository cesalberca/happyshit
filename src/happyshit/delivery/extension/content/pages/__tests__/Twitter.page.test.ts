import { TwitterPage } from '../Twitter.page'
import { container } from '../../../../../../arch/rootContainer'
import { TYPES } from '../../../../../../arch/types'
import { selectorMock } from '../__mocks__/Selector.mock'
import { loggerMock } from '../../../../../../arch/logger/__mocks__/logger.mock'

describe('Twitter.page', () => {
  let twitterPage: TwitterPage

  beforeEach(() => {
    container.rebind(TYPES.Logger).toConstantValue(loggerMock)
    container.rebind(TYPES.Window).toConstantValue(jest.fn())
    container.rebind(TYPES.Selector).toConstantValue(selectorMock)
    twitterPage = container.get<TwitterPage>(TYPES.WebPage)
  })

  it('should select all footers', async () => {
    expect.assertions(1)
    await twitterPage.getAllFooters()
    expect(selectorMock.selectAll).toHaveBeenCalledWith('.stream-item-footer .ProfileTweet-actionList')
  })
})
