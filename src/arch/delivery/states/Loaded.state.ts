import { State } from './State'
import { StateContext } from './StateContext'
import { inject } from 'inversify'
import { TYPES } from '../../../happyshit/types'

export class LoadedState implements State {
  public constructor(@inject(TYPES.State) private readonly context: StateContext) {
    this.context = context
  }

  public render() {
    this.context.ui.block = false
    this.context.ui.message = ''
  }
}
