import 'reflect-metadata'

import { Container } from 'inversify'
import { IService } from '../arch/application/services/IService'
import { IConsole } from '../arch/domain/logger/IConsole'
import { TYPES } from './types'
import { Http } from '../arch/application/http/Http'
import { IHttp } from '../arch/application/http/IHttp'
import { UserService } from './application/services/User.service'
import { ISelector } from './delivery/extension/content/pages/ISelector'
import { TwitterPage } from './delivery/extension/content/pages/Twitter.page'
import { WebPage } from './delivery/extension/content/pages/WebPage'
import { WebSelector } from './delivery/extension/content/pages/WebSelector'
import { Logger } from '../arch/domain/logger/Logger'
import { ILogger } from '../arch/domain/logger/ILogger'
import { StateContext } from './application/states/StateContext'

const container = new Container()

container
  .bind<StateContext>(TYPES.State)
  .to(StateContext)
  .inSingletonScope()
container
  .bind<IHttp>(TYPES.Http)
  .to(Http)
  .inSingletonScope()
container
  .bind<IService>(TYPES.UserService)
  .to(UserService)
  .inSingletonScope()
container
  .bind<ILogger>(TYPES.Logger)
  .to(Logger)
  .inSingletonScope()
container.bind<IConsole>(TYPES.Console).toConstantValue(console)

container.bind<Window>(TYPES.Window).toConstantValue(window)
container.bind<Document>(TYPES.Document).toConstantValue(window.document)
container
  .bind<WebPage>(TYPES.WebPage)
  .to(TwitterPage)
  .inSingletonScope()
container
  .bind<ISelector>(TYPES.Selector)
  .to(WebSelector)
  .inSingletonScope()

export { container }
