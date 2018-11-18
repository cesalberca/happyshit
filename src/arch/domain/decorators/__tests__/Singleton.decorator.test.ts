import { Singleton, singleton } from '../Singleton.decorator'

describe('Singleton.decorator', () => {
  it('should instantiate the object if there is not an instantiation of the given object', () => {
    @singleton
    class Foo {
      public count = 0
      constructor() {
        this.count++
      }
    }

    const typedInstance = (Foo as unknown) as Singleton<Foo>
    const instance = typedInstance.instance

    expect(instance.count).toEqual(1)
  })

  it('should return the same object', () => {
    @singleton
    class Foo {}

    const typedInstance = (Foo as unknown) as Singleton<Foo>
    const a = typedInstance.instance
    const b = typedInstance.instance

    expect(a === b).toBeTruthy()
  })
})
