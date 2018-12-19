import { Maybe } from '../../../utils/Maybe'
import { Repository } from '../Repository'
import { Id } from '../../types/main.type'
import { Database } from '../Database'
import { injectable } from 'inversify'

export type Collection = string

@injectable()
export class FirestoreRepository<T = {}, U = {}> implements Repository<T, U> {
  protected _collection!: Collection

  protected constructor(protected readonly database: Database) {}

  public async create(payload: U): Promise<boolean> {
    try {
      this.database.collection(this._collection).add(payload)
      return true
    } catch (e) {
      return false
    }
  }

  public async findAll(): Promise<T[]> {
    const data: T[] = []
    const collection = await this.database.collection(this._collection).get()
    collection.forEach(document => {
      data.push(document.data() as T)
    })

    return data
  }

  public async findOne(id: Id): Promise<Maybe<T>> {
    const foundOne = ((await this.database.collection(this._collection).doc(id)) as unknown) as T
    return Maybe.fromValue(foundOne)
  }

  public async update(id: Id, payload: U): Promise<boolean> {
    throw new Error('Method not implemented' + id + payload)
  }
}
