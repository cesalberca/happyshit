import React from 'react'
import { render } from 'react-dom'
import { container } from '../../../../rootContainer'
import { Icon } from './Icon'
import { TwitterPage } from './pages/Twitter.page'
import { TYPES } from '../../../../types'
;(async () => {
  const twitterPage: TwitterPage = container.get(TYPES.WebPage)

  await twitterPage.load()
  twitterPage.observeElement('#stream-items-id', async () => {
    const footers = await twitterPage.getAllFooters()
    footers.forEach(footer => {
      footer.id = 'happyshit'
      render(<Icon />, footer)
    })
  })
})()
