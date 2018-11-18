import { IState } from './IState'
import { StateContext } from './StateContext'

export class ErrorState implements IState {
  public constructor(private readonly context: StateContext) {}

  public errorState() {
    this.context.disableSpinners()
  }

  public loadingState() {}

  public loadedState() {}
}
