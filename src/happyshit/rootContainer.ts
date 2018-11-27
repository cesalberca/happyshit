import 'reflect-metadata'

import { Container } from 'inversify'
import { Service } from '../arch/domain/services/Service'
import { Console } from '../arch/logger/Console'
import { TYPES } from './types'
import { HttpImpl } from '../arch/domain/http/HttpImpl'
import { Http } from '../arch/domain/http/Http'
import { UserImplService } from './domain/services/UserImpl.service'
import { Selector } from './delivery/extension/content/pages/Selector'
import { TwitterPage } from './delivery/extension/content/pages/Twitter.page'
import { WebPage } from './delivery/extension/content/pages/WebPage'
import { WebSelector } from './delivery/extension/content/pages/WebSelector'
import { LoggerImpl } from '../arch/logger/LoggerImpl'
import { StateContext } from '../arch/delivery/states/StateContext'
import { Logger } from '../arch/logger/Logger'
import { StateStrategy } from './delivery/ui/utils/StateStrategy'

const container = new Container()

container
  .bind<StateContext>(TYPES.State)
  .to(StateContext)
  .inSingletonScope()
container
  .bind<Http>(TYPES.Http)
  .to(HttpImpl)
  .inSingletonScope()
container
  .bind<Service>(TYPES.UserService)
  .to(UserImplService)
  .inSingletonScope()
container
  .bind<Logger>(TYPES.Logger)
  .to(LoggerImpl)
  .inSingletonScope()
container.bind<Console>(TYPES.Console).toConstantValue(console)

container.bind<Window>(TYPES.Window).toConstantValue(window)
container.bind<Document>(TYPES.Document).toConstantValue(window.document)
container
  .bind<WebPage>(TYPES.WebPage)
  .to(TwitterPage)
  .inSingletonScope()
container
  .bind<Selector>(TYPES.Selector)
  .to(WebSelector)
  .inSingletonScope()
container.bind<StateStrategy>(TYPES.StateStrategy).to(StateStrategy)

export { container }
