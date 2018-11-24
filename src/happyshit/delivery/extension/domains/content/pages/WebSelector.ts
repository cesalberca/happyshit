import { inject, injectable } from 'inversify'
import { Maybe } from '../../../../../../arch/domain/Maybe'
import { ISelector } from './ISelector'
import { TYPES } from '../../../../../types'

@injectable()
export class WebSelector implements ISelector<Element> {
  public constructor(@inject(TYPES.Document) private readonly document: Document) {
    this.document = document
  }

  public select(query: string): Maybe<Element> {
    return Maybe.fromValue(this.document.querySelector(query) as Element)
  }

  public selectAll(query: string): Element[] {
    return (this.document.querySelectorAll(query) as unknown) as Element[]
  }
}
