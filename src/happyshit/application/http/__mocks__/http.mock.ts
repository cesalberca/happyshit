import { Http } from '../Http'

export const httpMock = ({
  put: jest.fn(),
  post: jest.fn(),
  get: jest.fn(),
} as unknown) as Http
