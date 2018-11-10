import { log } from '../logger'

describe('logger', () => {
  it('should log using a custom logger', () => {
    const stub: Partial<Console> = {
      log: jest.fn(),
    }
    log(stub as Console)('test')
    expect(stub.log).toHaveBeenCalledWith('test')
  })
})
