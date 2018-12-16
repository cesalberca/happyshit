import { FirestoreRepository } from '../Firestore.repository'
import { databaseMock } from '../../__mocks__/databaseMock'
import { Database } from '../../Database'

describe('Database.repository', () => {
  let repository: FirestoreRepository

  class ConcreteFirestoreRepository extends FirestoreRepository {
    constructor(database: Database) {
      super(database)
      this._collection = 'foo'
    }
  }

  beforeEach(() => {
    repository = new ConcreteFirestoreRepository((databaseMock as unknown) as Database)
  })

  afterEach(() => {
    ;((databaseMock as unknown) as jest.Mock).mockReset()
  })

  it('should get all elements', async () => {
    expect.assertions(1)
    await repository.findAll()
    expect(databaseMock.collection().get).toHaveBeenCalledWith('')
  })
})
