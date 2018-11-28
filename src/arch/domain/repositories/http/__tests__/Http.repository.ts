import { httpMock } from '../__mocks__/http.mock'
import { HttpRepository } from '../Http.repository'
import { Repository } from '../../Repository'
import { HttpModel } from '../Http.model'
import { Http } from '../Http'

describe('Http.repository', () => {
  interface Foo {
    foo: string
  }

  let repository: Repository & { getSomething: (url: HttpModel.Url) => Promise<unknown> }

  beforeEach(() => {
    class ConcreteRepository extends HttpRepository {
      constructor(http: Http, url: HttpModel.Url) {
        super(http, url)
      }

      public getSomething(url: HttpModel.Url): Promise<Foo> {
        return this.http.get(`${this.url}/${url}`) as Promise<Foo>
      }
    }

    repository = new ConcreteRepository(httpMock, 'foo')
  })

  it('should create a resource', async () => {
    expect.assertions(1)
    await repository.create(1, { bar: 'bar' })
    expect(httpMock.post).toHaveBeenCalledWith('foo/1', { bar: 'bar' })
  })

  it('should get a resource', async () => {
    expect.assertions(1)
    await repository.findOne(1)
    expect(httpMock.get).toHaveBeenCalledWith('foo/1')
  })

  it('should get all resources', async () => {
    expect.assertions(1)
    await repository.findAll()
    expect(httpMock.get).toHaveBeenCalledWith('foo')
  })

  it('should update a resource', async () => {
    expect.assertions(1)
    await repository.update(1, { bar: 'bar' })
    expect(httpMock.put).toHaveBeenCalledWith('foo/1', { bar: 'bar' })
  })

  it('should be able to have own methods', async () => {
    expect.assertions(1)
    await repository.getSomething('bar')
    expect(httpMock.get).toHaveBeenCalledWith('foo/bar')
  })
})
