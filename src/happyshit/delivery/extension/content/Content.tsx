import 'reflect-metadata'
import 'firebase/firestore'
import React from 'react'
import { render } from 'react-dom'
import { TwitterPage } from './pages/Twitter.page'
import { TYPES } from '../../../../arch/types'
import { EmotionContainer } from './container/Emotion.container'
import { inject } from 'inversify'
import { container } from '../../../../arch/rootContainer'
import { happyshit } from './Content.css'

class Main {
  constructor(@inject(TYPES.TwitterPage) private readonly twitterPage: TwitterPage) {
    this.twitterPage = twitterPage
  }

  public async bootstrap(): Promise<void> {
    await this.twitterPage.load()
    this.twitterPage.observeElement('#stream-items-id', () => {
      const footers = this.twitterPage.getAllFooters()
      footers.forEach(footer => {
        if (footer.id === 'happyshit') {
          return
        }

        const element = document.createElement('div')
        element.classList.add(happyshit)
        element.id = 'happyshit'
        footer.append(element)
        render(<EmotionContainer />, element)
      })
    })
  }
}

const main = new Main(container.get(TYPES.TwitterPage))
main.bootstrap()
