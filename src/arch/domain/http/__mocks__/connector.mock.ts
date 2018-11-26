import { Connector } from '../Connector'

export const connectorMock: Connector = {
  connect: jest.fn().mockResolvedValue({ json: () => jest.fn() }),
}
