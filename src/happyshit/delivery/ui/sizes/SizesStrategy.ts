import { Sizes } from './Sizes'
import { ElementTypes } from '../elements/ElementTypes'
import { injectable } from 'inversify'

type Classnames = string

@injectable()
export class SizesStrategy {
  private readonly styles: { [S in Sizes]: { [E in ElementTypes]: Classnames } } = {
    BIG: {
      ICON: 'foo',
    },
    MEDIUM: {
      ICON: 'bar',
    },
    SMALL: {
      ICON: 'baz',
    },
  }

  public getSizeStyles(size: Sizes, elementType: ElementTypes): string {
    return this.styles[size][elementType]
  }
}
