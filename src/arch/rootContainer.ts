import 'reflect-metadata'

import * as firebase from 'firebase/app'
import 'firebase/firestore'
import { Container } from 'inversify'
import { Repository } from './domain/repositories/Repository'
import { Console } from './logger/Console'
import { TYPES } from './types'
import { HttpImpl } from './domain/repositories/http/HttpImpl'
import { Http } from './domain/repositories/http/Http'
import { UserImplRepository } from '../happyshit/domain/repositories/UserImpl.repository'
import { Selector } from '../happyshit/delivery/extension/content/pages/Selector'
import { TwitterPage } from '../happyshit/delivery/extension/content/pages/Twitter.page'
import { WebPage } from '../happyshit/delivery/extension/content/pages/WebPage'
import { WebSelector } from '../happyshit/delivery/extension/content/pages/WebSelector'
import { LoggerImpl } from './logger/LoggerImpl'
import { StateContext } from './delivery/states/StateContext'
import { Logger } from './logger/Logger'
import { StateStrategy } from '../happyshit/delivery/ui/utils/StateStrategy'
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
