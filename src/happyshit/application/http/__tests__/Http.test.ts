import { clone } from '../../../../arch/domain/clone'
import { connectorMock } from '../__mocks__/connector.mock'
import { Http } from '../Http'
import { IConnector } from '../IConnector'

describe('HttpModel', () => {
  let connector: IConnector
  let http: Http

  beforeEach(() => {
    connector = clone(connectorMock)
    http = new Http(connector)
  })

  it('should get a resource', async () => {
    await http.get('test')
    expect(connector.connect).toHaveBeenCalledWith('test')
  })

  it('should get a resource by id', async () => {
    await http.get('test')
    expect(connector.connect).toHaveBeenCalledWith('test')
  })

  it('should post a request', async () => {
    await http.post('test', { a: 1 })
    expect(connector.connect).toHaveBeenCalledWith('test', {
      body: '{"a":1}',
      method: 'POST',
    })
  })

  it('should put a request', async () => {
    await http.put('test', { a: 1 })
    expect(connector.connect).toHaveBeenCalledWith('test', {
      body: '{"a":1}',
      method: 'PUT',
    })
  })
})
