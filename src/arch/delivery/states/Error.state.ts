import { State } from './State'
import { StateContext } from './StateContext'
import { inject } from 'inversify'
import { TYPES } from '../../types'

export class ErrorState implements State {
  public constructor(@inject(TYPES.State) private readonly context: StateContext) {
    this.context = context
  }

  public render(): void {
    this.context.ui.block = false
    this.context.ui.message = 'Some error'
  }
}
