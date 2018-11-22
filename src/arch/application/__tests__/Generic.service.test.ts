import { httpMock } from '../../../happyshit/application/http/__mocks__/http.mock'
import { Http } from '../../../happyshit/application/http/Http'
import { GenericService } from '../Generic.service'
import { IService } from '../IService'

describe('Generic.service', () => {
  interface Foo {
    foo: string
  }
  interface Bar {
    bar: string
  }

  let service: IService<Foo, Bar>

  beforeEach(() => {
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
    expect(httpMock.post).toHaveBeenCalledWith('foo/1', { bar: 'bar' })
  })

  it('should get a resource', async () => {
    expect.assertions(1)
    await service.findOne(1)
    expect(httpMock.get).toHaveBeenCalledWith('foo/1')
  })

  it('should get all resources', async () => {
    expect.assertions(1)
    await service.findAll()
    expect(httpMock.get).toHaveBeenCalledWith('foo')
  })

  it('should update a resource', async () => {
    expect.assertions(1)
    await service.update(1, { bar: 'bar' })
    expect(httpMock.put).toHaveBeenCalledWith('foo/1', { bar: 'bar' })
  })
})
