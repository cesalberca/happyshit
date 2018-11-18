import { Maybe } from '../../../../../../arch/domain/Maybe'
import { Selector } from './Selector'

export class WebSelector implements Selector<Element> {
  public constructor(private readonly document: Document) {
    this.document = document
  }

  public select(query: string): Maybe<Element> {
    return Maybe.fromValue(this.document.querySelector(query) as Element)
  }

  public selectAll(query: string): Element[] {
    return (this.document.querySelectorAll(query) as unknown) as Element[]
  }
}
