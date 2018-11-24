import 'reflect-metadata'

import { Container } from 'inversify'
import { IService } from '../arch/application/IService'
import { IConsole } from '../arch/domain/logger/IConsole'
import { TYPES } from './types'
import { Http } from './application/http/Http'
import { IHttp } from './application/http/IHttp'
import { UserService } from './application/services/User.service'
import { ISelector } from './delivery/extension/domains/content/pages/ISelector'
import { TwitterPage } from './delivery/extension/domains/content/pages/Twitter.page'
import { WebPage } from './delivery/extension/domains/content/pages/WebPage'
import { WebSelector } from './delivery/extension/domains/content/pages/WebSelector'
import { Logger } from '../arch/domain/logger/Logger'
import { ILogger } from '../arch/domain/logger/ILogger'

const container = new Container()

container.bind<IHttp>(TYPES.Http).to(Http)
container.bind<IService>(TYPES.UserService).to(UserService)
container.bind<ILogger>(TYPES.Logger).to(Logger)
container.bind<IConsole>(TYPES.Console).toConstantValue(console)

container.bind<Window>(TYPES.Window).toConstantValue(window)
container.bind<Document>(TYPES.Document).toConstantValue(window.document)
container.bind<WebPage>(TYPES.WebPage).to(TwitterPage)
container.bind<ISelector>(TYPES.Selector).to(WebSelector)

export { container }
