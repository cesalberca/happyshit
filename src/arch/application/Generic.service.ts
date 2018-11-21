import { Http } from '../../happyshit/application/http/Http'
import { Maybe } from '../domain/Maybe'
import { Service } from './Service'

export type Url = string

export abstract class GenericService<T, U> implements Service<T, U> {
  protected constructor(
    protected readonly http: Http<T, U>,
    protected readonly url: Url
  ) {
    this.http = http
    this.url = url
  }

  public async create(id: Http.Id, payload: U): Promise<Http.Response> {
    return this.http.post(this.getSingleResource(id), payload)
  }

  public async findAll(): Promise<T[]> {
    return this.http.get(this.url)
  }

  public async findOne(id: Http.Id): Promise<Maybe<T>> {
    const response = await this.http.get(this.getSingleResource(id))
    return Maybe.fromValue(response)
  }

  public async update(id: Http.Id, payload: U): Promise<Http.Response> {
    return this.http.post(this.getSingleResource(id), payload)
  }

  private getSingleResource(id: Http.Id) {
    return this.url + '/' + id
  }
}
