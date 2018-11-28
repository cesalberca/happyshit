import { State } from './State'
import { StateContext } from './StateContext'
import { inject } from 'inversify'
import { TYPES } from '../../../happyshit/types'

export class LoadingState implements State {
  public constructor(@inject(TYPES.State) private readonly context: StateContext) {
    this.context = context
  }

  public render(): void {
    this.context.ui.block = true
    this.context.ui.message = 'Loading'
  }
}
