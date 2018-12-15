import * as firebase from 'firebase/app'
import 'firebase/firestore'
import { Container } from 'inversify'

import { Console } from './logger/Console'
import { TYPES } from './types'
import { HttpImpl } from './domain/repositories/http/HttpImpl'
import { Http } from './domain/repositories/http/Http'
import { Selector } from '../happyshit/delivery/extension/content/pages/Selector'
import { TwitterPage } from '../happyshit/delivery/extension/content/pages/Twitter.page'
import { WebSelector } from '../happyshit/delivery/extension/content/pages/WebSelector'
import { LoggerImpl } from './logger/LoggerImpl'
import { StateContext } from './delivery/states/StateContext'
import { Logger } from './logger/Logger'
import { StateStrategy } from '../happyshit/delivery/ui/states/StateStrategy'
import { SizesStrategy } from '../happyshit/delivery/ui/sizes/SizesStrategy'
import { EmotionsListUseCase } from '../happyshit/domain/useCases/emotions/EmotionsList.useCase'
import { EmotionsRepository } from '../happyshit/domain/repositories/Emotions.repository'
import { Connector } from './domain/repositories/http/Connector'
import { EmotionsFirebaseRepository } from '../happyshit/domain/repositories/EmotionsFirebase.repository'
import { EmotionsCanBeUpdatedUseCase } from '../happyshit/domain/useCases/emotions/EmotionsCanBeUpdated.useCase'
import { Database } from './domain/repositories/Database'

const container = new Container()

container.bind<Connector>(TYPES.Connector).toConstantValue({ connect: window.fetch })
container
  .bind<Http>(TYPES.Http)
  .to(HttpImpl)
  .inSingletonScope()
container
  .bind<Logger>(TYPES.Logger)
  .to(LoggerImpl)
  .inSingletonScope()
container.bind<Console>(TYPES.Console).toConstantValue(window.console)

container.bind<Window>(TYPES.Window).toConstantValue(window)
container.bind<Document>(TYPES.Document).toConstantValue(window.document)

container
  .bind<StateContext>(TYPES.State)
  .to(StateContext)
  .inSingletonScope()

container
  .bind<Selector>(TYPES.Selector)
  .to(WebSelector)
  .inSingletonScope()
container
  .bind<TwitterPage>(TYPES.TwitterPage)
  .to(TwitterPage)
  .inSingletonScope()

container
  .bind<SizesStrategy>(TYPES.SizesStrategy)
  .to(SizesStrategy)
  .inSingletonScope()
container.bind<StateStrategy>(TYPES.StateStrategy).to(StateStrategy)

container.bind<EmotionsRepository>(TYPES.EmotionsRepository).to(EmotionsFirebaseRepository)
container.bind<EmotionsListUseCase>(TYPES.EmotionsListUseCase).to(EmotionsListUseCase)
container
  .bind<EmotionsCanBeUpdatedUseCase>(TYPES.EmotionsCanBeUpdatedUseCase)
  .to(EmotionsCanBeUpdatedUseCase)
  .inSingletonScope()

const config = {
  apiKey: 'AIzaSyB7BGeDe42SJFkKKTW8HQTtcb2IMybAiU0',
  authDomain: 'happyshit-c187e.firebaseapp.com',
  databaseURL: 'https://happyshit-c187e.firebaseio.com',
  projectId: 'happyshit-c187e',
  storageBucket: 'happyshit-c187e.appspot.com',
  messagingSenderId: '435079812121',
}

firebase.initializeApp(config)
const database = firebase.firestore()

database.settings({
  timestampsInSnapshots: true,
})

container.bind<Database>(TYPES.Database).toConstantValue(database)

export { container }
