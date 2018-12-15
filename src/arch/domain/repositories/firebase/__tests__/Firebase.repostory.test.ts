import { Collection, FirebaseRepository } from '../Firebase.repository'
import { Firestore } from '../../../../rootContainer'
import { databaseMock } from '../../__mocks__/databaseMock'

describe('Firebase.repository', () => {
  let repository: FirebaseRepository

  class ConcreteFirebaseRepository extends FirebaseRepository {
    constructor(database: Firestore, collection: Collection) {
      super(database, collection)
    }
  }

  beforeEach(() => {
    repository = new ConcreteFirebaseRepository((databaseMock as unknown) as Firestore, 'foo')
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
