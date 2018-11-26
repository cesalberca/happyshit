import { LoggerImpl } from '../LoggerImpl'

describe('LoggerImpl', () => {
  let logger: LoggerImpl
  let stub: Partial<Console>

  beforeEach(() => {
    stub = {
      log: jest.fn(),
    }
    logger = new LoggerImpl(stub as Console)
  })

  it('should log using a custom logger', () => {
    logger.log('test')
    expect(stub.log).toHaveBeenCalledWith('test')
  })
})
