import 'tachyons'
import React from 'react'
import { render } from 'react-dom'
import { container } from '../../../rootContainer'
import { TwitterPage } from './pages/Twitter.page'
import { TYPES } from '../../../types'
import { EmotionContainer } from './container/Emotion.container'
;(async () => {
  const twitterPage: TwitterPage = container.get(TYPES.WebPage)

  await twitterPage.load()
  twitterPage.observeElement('#stream-items-id', async () => {
    const footers = await twitterPage.getAllFooters()
    footers.forEach(footer => {
      const element = document.createElement('div')
      element.id = 'happyshit'
      footer.append(element)
      render(<EmotionContainer />, element)
    })
  })
})()
