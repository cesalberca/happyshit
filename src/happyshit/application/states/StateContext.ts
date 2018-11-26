import { ErrorState } from './Error.state'
import { IState } from './IState'
import { LoadedState } from './Loaded.state'
import { LoadingState } from './Loading.state'
import { injectable } from 'inversify'

@injectable()
export class StateContext {
  public set state(newState: IState) {
    this._state = newState
  }

  public get state() {
    return this._state
  }

  private readonly _loadedState = new LoadedState(this)
  private readonly _loadingState = new LoadingState(this)
  private readonly _errorState = new ErrorState(this)

  get loadedState(): LoadedState {
    return this._loadedState
  }

  get loadingState(): LoadingState {
    return this._loadingState
  }

  get errorState(): ErrorState {
    return this._errorState
  }

  private _state: IState = this._loadingState

  public load() {
    this._state.loadedState()
  }

  public loading() {
    this._state.loadingState()
  }

  public error() {
    this._state.errorState()
  }
}
