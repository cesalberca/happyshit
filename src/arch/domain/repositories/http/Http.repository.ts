import { HttpModel } from './Http.model'
import { Maybe } from '../../../utils/Maybe'
import { Repository } from '../Repository'
import { Id } from '../../types/main.type'
import { Http } from './Http'

export abstract class HttpRepository<T = {}, U = {}> implements Repository<T, U> {
  protected constructor(protected readonly http: Http<T, U>, protected readonly url: HttpModel.Url) {
    this.http = http
    this.url = url
  }

  public async create(payload: U): Promise<boolean> {
    try {
      await this.http.post(this.getMultipleResources(), payload)
      return true
    } catch (e) {
      return false
    }
  }

  public async findAll(): Promise<T[]> {
    return this.http.get(this.getMultipleResources()) as Promise<T[]>
  }

  public async findOne(id: Id): Promise<Maybe<T>> {
    const response = await this.http.get(this.getSingleResource(id))
    return Maybe.fromValue(response as T)
  }

  public async update(id: Id, payload: U): Promise<boolean> {
    try {
      await this.http.put(this.getSingleResource(id), payload)
      return true
    } catch (e) {
      return false
    }
  }

  private getSingleResource(id: Id): string {
    return `${this.url}/${id}`
  }

  private getMultipleResources(): string {
    return this.url
  }
}
