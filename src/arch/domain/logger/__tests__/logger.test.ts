import { Logger } from '../Logger'

describe('Logger', () => {
  let logger: Logger
  let stub: Partial<Console>

  beforeEach(() => {
    stub = {
      log: jest.fn(),
    }
    logger = new Logger(stub as Console)
  })

  it('should log using a custom logger', () => {
    logger.log('test')
    expect(stub.log).toHaveBeenCalledWith('test')
  })
})
