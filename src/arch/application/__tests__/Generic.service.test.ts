import { connectorMock } from '../../../happyshit/application/http/__mocks__/Connector'
import { Http } from '../../../happyshit/application/http/Http'
import { GenericService } from '../Generic.service'
import { Service } from '../Service'

describe('Generic.service', () => {
  interface Foo {
    foo: string
  }
  interface Bar {
    bar: string
  }

  let httpMock: Http<Foo, Bar>
  let service: Service<Foo, Bar>

  beforeEach(() => {
    httpMock = new Http<Foo, Bar>(connectorMock)

    class ConcreteService extends GenericService<Foo, Bar> {
      constructor(http: Http<Foo, Bar>, url: string) {
        super(http, url)
      }

      public getSomething() {
        return this.http.get(this.url)
      }
    }

    service = new ConcreteService(httpMock, 'foo')
  })

  it('should create a resource', async () => {
    expect.assertions(1)
    await service.create(1, { bar: 'bar' })
    expect(httpMock).toHaveBeenCalledWith('/foo/1')
  })
})
