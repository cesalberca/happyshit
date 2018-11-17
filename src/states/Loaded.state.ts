import { IState } from './IState'
import { StateContext } from './StateContext'

export class LoadedState implements IState {
  constructor(private readonly context: StateContext) {}

  public errorState() {
    this.context.showErrors()
    this.context.state = this.context.errorState
  }

  public loadingState() {
    this.context.enableSpinners()
    this.context.state = this.context.loadedState
  }

  public loadedState() {}
}
