import { IState } from './IState'
import { StateContext } from './StateContext'

export class LoadingState implements IState {
  public constructor(private readonly context: StateContext) {}

  public errorState() {}

  public loadingState() {}

  public loadedState() {
    this.context.state = this.context.loadedState
  }
}
