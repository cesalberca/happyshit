import { inject, injectable } from 'inversify'
import { Maybe } from '../../../../../arch/Maybe'
import { Selector } from './Selector'
import { TYPES } from '../../../../types'

@injectable()
export class WebSelector implements Selector<Element> {
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
