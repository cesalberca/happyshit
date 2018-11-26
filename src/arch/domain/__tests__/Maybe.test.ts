import { Maybe } from '../Maybe'

describe('maybe', () => {
  it('should handle a value', () => {
    const maybe = Maybe.some('test')
    expect(maybe.getOrElse('')).toEqual('test')
  })

  it('should handle an undefined value', () => {
    const maybe = Maybe.fromValue((undefined as unknown) as string)
    expect(maybe.getOrElse('test')).toEqual('test')
  })

  it('should handle an empty value', () => {
    const maybe = Maybe.fromValue('')
    expect(maybe.getOrElse('test')).toEqual('test')
  })

  it('should handle a callback as a default value', () => {
    const mock = jest.fn()
    const maybe = Maybe.fromValue('')
    maybe.getOrExecute(mock)
    expect(mock).toHaveBeenCalled()
  })

  it('should handle nullable values', () => {
    const maybe = Maybe.none()
    expect(maybe.getOrElse('test')).toEqual('test')
  })

  it('should be able to map existing values', () => {
    const maybeMap = Maybe.some({ a: 'a' })
    expect(maybeMap.map(e => e.a).getOrElse('b')).toEqual('a')
  })

  it('should able to flatMap non-existing values', () => {
    const returnMaybe = (): Maybe<{ a: Maybe<string> }> => Maybe.some({ a: Maybe.fromValue('') })
    const result = returnMaybe().flatMap(e => e.a)
    expect(result.getOrElse('test')).toEqual('test')
  })
})
