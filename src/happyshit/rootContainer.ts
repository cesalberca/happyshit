import 'reflect-metadata'

import { Container } from 'inversify'
import { IService } from '../arch/application/IService'
import { IConsole } from '../arch/domain/logger/IConsole'
import { APPLICATION_SERVICE_ID } from './application/applicationServiceId'
import { Http } from './application/http/Http'
import { IHttp } from './application/http/IHttp'
import { UserService } from './application/services/User.service'
import { DELIVERY_SERVICE_ID } from './delivery/extension/deliveryServiceId'
import { ISelector } from './delivery/extension/domains/content/pages/ISelector'
import { TwitterPage } from './delivery/extension/domains/content/pages/Twitter.page'
import { WebPage } from './delivery/extension/domains/content/pages/WebPage'
import { WebSelector } from './delivery/extension/domains/content/pages/WebSelector'
import { Logger } from '../arch/domain/logger/Logger'
import { ILogger } from '../arch/domain/logger/ILogger'

const container = new Container()

container.bind<IHttp>(APPLICATION_SERVICE_ID.Http).to(Http)
container.bind<IService>(APPLICATION_SERVICE_ID.UserService).to(UserService)
container.bind<ILogger>(APPLICATION_SERVICE_ID.Logger).to(Logger)
container.bind<IConsole>(APPLICATION_SERVICE_ID.Console).toConstantValue(console)

container.bind<Window>(DELIVERY_SERVICE_ID.Window).toConstantValue(window)
container.bind<Document>(DELIVERY_SERVICE_ID.Document).toConstantValue(window.document)
container.bind<WebPage>(DELIVERY_SERVICE_ID.WebPage).to(TwitterPage)
container.bind<ISelector>(DELIVERY_SERVICE_ID.Selector).to(WebSelector)

export { container }
