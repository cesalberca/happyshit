import React from 'react'
import { render } from 'react-dom'
import { container } from '../../../../rootContainer'
import { DELIVERY_SERVICE_ID } from '../../deliveryServiceId'
import { Icon } from './Icon'
import { TwitterPage } from './pages/Twitter.page'
;(async () => {
  const twitterPage: TwitterPage = container.get(DELIVERY_SERVICE_ID.WebPage)
  const footers = await twitterPage.getAllFooters()

  footers.forEach(footer => {
    footer.id = 'happyshit'
    render(<Icon />, footer)
  })
})()
