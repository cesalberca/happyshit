export const windowMock: Partial<Window> = {
  addEventListener: jest.fn((_, cb) => {
    cb()
  }),
}
