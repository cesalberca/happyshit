export const databaseMock = {
  collection: () => ({
    get: jest.fn().mockResolvedValue([]),
  }),
}
