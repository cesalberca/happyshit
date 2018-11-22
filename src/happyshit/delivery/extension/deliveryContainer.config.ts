import 'reflect-metadata'

import { Container } from 'inversify'
import { DELIVERY_SERVICE_ID } from './deliveryServiceId'
import { ISelector } from './domains/content/pages/ISelector'
import { TwitterPage } from './domains/content/pages/Twitter.page'
import { WebPage } from './domains/content/pages/WebPage'
import { WebSelector } from './domains/content/pages/WebSelector'

const container = new Container()
container.bind<Window>(DELIVERY_SERVICE_ID.Window).toConstantValue(window)
container.bind<Document>(DELIVERY_SERVICE_ID.Document).toConstantValue(window.document)
container.bind<WebPage>(DELIVERY_SERVICE_ID.WebPage).to(TwitterPage)
container.bind<ISelector>(DELIVERY_SERVICE_ID.Selector).to(WebSelector)

export { container }
