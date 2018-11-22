import { TwitterPage } from '../Twitter.page'
import { WebSelector } from '../WebSelector'
import { loggerMock } from '../../../../../../../arch/domain/logger/__mocks__/logger.mock'

describe('Twitter.page', () => {
  let document: Partial<Document>
  let twitterPage: TwitterPage

  beforeEach(() => {
    document = {
      querySelector: jest.fn(),
      querySelectorAll: jest.fn(),
    }

    const selector = new WebSelector(document as Document)
    twitterPage = new TwitterPage((jest.fn() as unknown) as Window, selector, loggerMock)
  })

  it('should select all footers', async () => {
    expect.assertions(1)
    twitterPage.load = jest.fn()
    await twitterPage.getAllFooters()
    expect(document.querySelectorAll).toHaveBeenCalledWith('.stream-item-footer .ProfileTweet-actionList')
  })
})
