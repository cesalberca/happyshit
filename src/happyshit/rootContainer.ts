import 'reflect-metadata'

import * as firebase from 'firebase/app'
import 'firebase/firestore'
import { Container } from 'inversify'
import { Repository } from '../arch/domain/repositories/Repository'
import { Console } from '../arch/logger/Console'
import { TYPES } from './types'
import { HttpImpl } from '../arch/domain/repositories/http/HttpImpl'
import { Http } from '../arch/domain/repositories/http/Http'
import { UserImplRepository } from './domain/repositories/UserImpl.repository'
import { Selector } from './delivery/extension/content/pages/Selector'
import { TwitterPage } from './delivery/extension/content/pages/Twitter.page'
import { WebPage } from './delivery/extension/content/pages/WebPage'
import { WebSelector } from './delivery/extension/content/pages/WebSelector'
import { LoggerImpl } from '../arch/logger/LoggerImpl'
import { StateContext } from '../arch/delivery/states/StateContext'
import { Logger } from '../arch/logger/Logger'
import { StateStrategy } from './delivery/ui/utils/StateStrategy'
import Database = firebase.database.Database

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
  .bind<Repository>(TYPES.UserRepository)
  .to(UserImplRepository)
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

firebase.initializeApp({
  apiKey: '### FIREBASE API KEY ###',
  authDomain: '### FIREBASE AUTH DOMAIN ###',
  projectId: '### CLOUD FIRESTORE PROJECT ID ###',
})

const database = firebase.firestore()
database.settings({
  timestampsInSnapshots: true,
})

container.bind<Database>(TYPES.Database).toConstantValue(database as any)

export { container }
