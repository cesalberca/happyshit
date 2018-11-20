import { IState } from './IState'
import { StateContext } from './StateContext'

export class LoadedState implements IState {
  public constructor(private readonly context: StateContext) {
    this.context = context
  }

  public errorState() {
    this.context.state = this.context.errorState
  }

  public loadingState() {
    this.context.state = this.context.loadedState
  }

  public loadedState() {}
}
