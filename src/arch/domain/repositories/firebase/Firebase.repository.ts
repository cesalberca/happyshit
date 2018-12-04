import { Maybe } from '../../../utils/Maybe'
import { Repository } from '../Repository'
import { Id } from '../../types/main.type'
import { inject } from 'inversify'
import { TYPES } from '../../../types'

export type Collection = string

export abstract class FirebaseRepository<T = {}, U = {}> implements Repository<T, U> {
  protected constructor(
    @inject(TYPES.Database) protected readonly database: any,
    protected readonly collection: Collection
  ) {
    this.database = database
    this.collection = collection
  }

  public async create(payload: U): Promise<boolean> {
    try {
      this.database.collection(this.collection).add(payload)
      return true
    } catch (e) {
      return false
    }
  }

  public async findAll(): Promise<T[]> {
    const data: T[] = []
    const collection = await this.database.collection(this.collection).get()
    collection.forEach((document: any) => {
      data.push(document.data() as T)
    })

    return data
  }

  public async findOne(id: Id): Promise<Maybe<T>> {
    const foundOne = ((await this.database.collection(this.collection).doc(id)) as unknown) as T
    return Maybe.fromValue(foundOne)
  }

  public async update(id: Id, payload: U): Promise<boolean> {
    throw new Error('Method not implemented' + id + payload)
  }
}
