import { injectable } from 'inversify'
import { Connector } from './Connector'
import { Http } from './Http'
import { HttpModel } from './Http.model'

@injectable()
export class HttpImpl<T = {}, U = {}> implements Http<T, U> {
  public constructor(private readonly connector: Connector) {
    this.connector = connector
  }

  public async get(url: string): Promise<T | T[]> {
    const response = await this.connector.connect(url)
    return response.json()
  }

  public async post(url: string, payload: U): Promise<HttpModel.Response> {
    const response = await this.connector.connect(
      url,
      {
        body: JSON.stringify(payload),
        method: 'POST',
      }
    )
    return {
      status: response.status,
    }
  }

  public async put(url: string, payload: U): Promise<HttpModel.Response> {
    const response = await this.connector.connect(
      url,
      {
        body: JSON.stringify(payload),
        method: 'PUT',
      }
    )
    return {
      status: response.status,
    }
  }
}
