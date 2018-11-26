import { inject } from 'inversify'
import { HttpImpl } from '../http/HttpImpl'
import { HttpModel } from '../http/Http.model'
import { TYPES } from '../../../happyshit/types'
import { Maybe } from '../../Maybe'
import { Service } from './Service'

export abstract class GenericService<T, U> implements Service<T, U> {
  protected constructor(
    @inject(TYPES.Http) protected readonly http: HttpImpl<T, U>,
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
