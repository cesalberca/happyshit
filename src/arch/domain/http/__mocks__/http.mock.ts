import { HttpImpl } from '../HttpImpl'

export const httpMock = ({
  put: jest.fn(),
  post: jest.fn(),
  get: jest.fn(),
} as unknown) as HttpImpl
