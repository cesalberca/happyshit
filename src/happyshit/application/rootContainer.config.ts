import 'reflect-metadata'

import { Container } from 'inversify'
import { IService } from '../../arch/application/IService'
import { Http } from './http/Http'
import { IHttp } from './http/IHttp'
import { SERVICE_ID } from './serviceId'
import { UserService } from './services/User.service'

const container = new Container()
container.bind<IHttp>(SERVICE_ID.Http).to(Http)
container.bind<IService>(SERVICE_ID.UserService).to(UserService)

export { container }
