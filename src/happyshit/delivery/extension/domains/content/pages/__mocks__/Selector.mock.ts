import { ISelector } from '../ISelector'

export const selectorMock: ISelector = {
  select: jest.fn(),
  selectAll: jest.fn(),
}
