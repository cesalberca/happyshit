import { Container } from 'inversify'
import { IService } from '../../arch/application/IService'
import { APPLICATION_SERVICE_ID } from './applicationServiceId'
import { Http } from './http/Http'
import { IHttp } from './http/IHttp'
import { UserService } from './services/User.service'

const container = new Container()
container.bind<IHttp>(APPLICATION_SERVICE_ID.Http).to(Http)
container.bind<IService>(APPLICATION_SERVICE_ID.UserService).to(UserService)

export { container }
