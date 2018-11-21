import { connectorMock } from '../__mocks__/Connector'
import { Connector, Http } from '../Http'

describe('Http', () => {
  let connector: Connector

  beforeEach(() => {
    connector = connectorMock
  })

  it('should get a resource', async () => {
    const http = new Http(connector)
    await http.get('test')
    expect(connector).toHaveBeenCalledWith('test')
  })

  it('should get a resource by id', async () => {
    const http = new Http(connector)
    await http.get('test')
    expect(connector).toHaveBeenCalledWith('test')
  })

  it('should post a request', async () => {
    const http = new Http(connector)
    await http.post('test', { a: 1 })
    expect(connector).toHaveBeenCalledWith('test', {
      body: '{"a":1}',
      method: 'POST',
    })
  })

  it('should put a request', async () => {
    const http = new Http(connector)
    await http.put('test', { a: 1 })
    expect(connector).toHaveBeenCalledWith('test', {
      body: '{"a":1}',
      method: 'PUT',
    })
  })
})
