import { injectable } from 'inversify'
import { IConnector } from './IConnector'
import { IHttp } from './IHttp'

@injectable()
export class Http<T = {}, U = {}> implements IHttp<T, U> {
  public constructor(private readonly connector: IConnector) {
    this.connector = connector
  }

  public async get(url: string) {
    const response = await this.connector.connect(url)
    return response.json()
  }

  public async post(url: string, payload: U) {
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

  public async put(url: string, payload: U) {
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
