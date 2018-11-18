import React from 'react'
import { render } from 'react-dom'
import { Icon } from './Icon'
import { TwitterPage } from './pages/Twitter.page'
import { WebSelector } from './pages/WebSelector'

window.addEventListener('load', () => {
  const webSelector = new WebSelector(window.document)
  const twitterPage = new TwitterPage(webSelector)

  twitterPage.getAllFooters().forEach(footer => {
    footer.id = 'happyshit'
    render(<Icon />, footer)
  })
})
