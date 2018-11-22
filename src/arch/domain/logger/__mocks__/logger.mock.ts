import { ILogger } from '../ILogger'

export const loggerMock: ILogger = {
  log: jest.fn(),
}
