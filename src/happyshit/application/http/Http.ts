import { injectable } from 'inversify'
import { IHttp } from './IHttp'

export type Connector = (input: RequestInfo, init?: RequestInit) => Promise<Response>

@injectable()
export class Http<T = {}, U = {}> implements IHttp<T, U> {
  public constructor(private readonly connector: Connector) {
    this.connector = connector
  }

  public async get(url: string) {
    const response = await this.connector(url)
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

  public async put(url: string, payload: U) {
    const response = await this.connector(url, {
      body: JSON.stringify(payload),
      method: 'PUT',
    })
    return {
      status: response.status,
    }
  }
}
