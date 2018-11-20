import { IState } from './IState'
import { StateContext } from './StateContext'

export class ErrorState implements IState {
  public constructor(private readonly context: StateContext) {
    this.context = context
  }

  public errorState() {}

  public loadingState() {}

  public loadedState() {}
}
