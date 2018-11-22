import { inject } from 'inversify'
import { Http } from '../../happyshit/application/http/Http'
import { HttpModel } from '../../happyshit/application/http/Http.model'
import { SERVICE_ID } from '../../happyshit/application/serviceId'
import { Maybe } from '../domain/Maybe'
import { IService } from './IService'

export abstract class GenericService<T, U> implements IService<T, U> {
  protected constructor(
    @inject(SERVICE_ID.Http) protected readonly http: Http<T, U>,
    protected readonly url: HttpModel.Url
  ) {
    this.http = http
    this.url = url
  }

  public async create(id: HttpModel.Id, payload: U): Promise<HttpModel.Response> {
    return this.http.post(this.getSingleResource(id), payload)
  }

  public async findAll(): Promise<T[]> {
    return this.http.get(this.url)
  }

  public async findOne(id: HttpModel.Id): Promise<Maybe<T>> {
    const response = await this.http.get(this.getSingleResource(id))
    return Maybe.fromValue(response)
  }

  public async update(id: HttpModel.Id, payload: U): Promise<HttpModel.Response> {
    return this.http.put(this.getSingleResource(id), payload)
  }

  private getSingleResource(id: HttpModel.Id) {
    return `${this.url}/${id}`
  }
}
