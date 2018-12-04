import { styles } from '../styles'

describe('styles', () => {
  it('should create a string of classes', () => {
    const classes = ['foo', 'bar', 'baz']
    const actual = styles(classes)
    const expected = 'foo bar baz'
    expect(actual).toBe(expected)
  })

  it('should handle undefined', () => {
    const classes = undefined
    const actual = styles(classes)
    const expected = ''
    expect(actual).toBe(expected)
  })
})
