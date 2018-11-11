import { Singleton, singleton } from '../Singleton.decorator'

describe('Singleton.decorator', () => {
  it('should return the same object', () => {
    @singleton
    class Foo {
      public count = 0
      constructor() {
        this.count++
      }
    }

    const typedInstance = (Foo as unknown) as Singleton<Foo>
    let instance = typedInstance.getInstance()
    instance = typedInstance.getInstance()
    instance = typedInstance.getInstance()

    expect(instance.count).toEqual(1)
  })

  it('should throw an error when trying to instantiate a singleton', () => {
    @singleton
    class Foo {}

    expect(() => {
      // tslint:disable-next-line
      new Foo()
    }).toThrowError()
  })
})
