import React from 'react'
import { render } from 'react-dom'
import { Icon } from './Icon'
import { TwitterPage } from './pages/Twitter.page'
import { WebSelector } from './pages/WebSelector'

const webSelector = new WebSelector(window.document)
const twitterPage = new TwitterPage(window, webSelector)

twitterPage.getAllFooters().then(loadedFooters => {
  loadedFooters.forEach(footer => {
    footer.id = 'happyshit'
    render(<Icon />, footer)
  })
})
