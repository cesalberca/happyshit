import { IConnector } from '../IConnector'

export const connectorMock: IConnector = {
  connect: jest.fn().mockResolvedValue({ json: () => jest.fn() }),
}
