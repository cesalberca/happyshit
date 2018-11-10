import { Id } from '../types/main.type'
import { IHttp } from './IHttp'

export type Connector = (
  input: RequestInfo,
  init?: RequestInit
) => Promise<Response>

export class Http<T, U> implements IHttp<T, U> {
  constructor(private readonly connector: Connector) {
    this.connector = connector
  }

  public async get(url: string, id?: Id) {
    const response = await this.connector(id ? url + '/' + id : url)
    return response.json()
  }

  public async post(url: string, payload: U) {
    const response = await this.connector(url, {
      body: JSON.stringify(payload),
      method: 'POST',
    })
    return {
      status: response.status,
    }
  }

  public async put(url: string, id: Http.Id, payload: U) {
    const response = await this.connector(url + '/' + id, {
      body: JSON.stringify(payload),
      method: 'PUT',
    })
    return {
      status: response.status,
    }
  }
}
