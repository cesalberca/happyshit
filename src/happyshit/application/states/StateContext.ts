import { ErrorState } from './Error.state'
import { IState } from './IState'
import { LoadedState } from './Loaded.state'
import { LoadingState } from './Loading.state'

export class StateContext {
  private readonly _loadedState = new LoadedState(this)
  private readonly _loadingState = new LoadingState(this)
  private readonly _errorState = new ErrorState(this)

  private _state: IState

  public constructor() {
    this._state = new LoadingState(this)
  }

  public get loadedState(): LoadedState {
    return this._loadedState
  }

  public get loadingState(): LoadingState {
    return this._loadingState
  }

  public get errorState(): ErrorState {
    return this._errorState
  }

  public set state(newState: IState) {
    this._state = newState
  }

  public get state() {
    return this._state
  }

  public get isLoading() {
    return this._state instanceof LoadingState
  }

  public get isLoaded() {
    return this._state instanceof LoadedState
  }

  public get isError() {
    return this._state instanceof ErrorState
  }

  public load() {
    this._state.loadedState()
  }

  public loading() {
    this._state.loadingState()
  }

  public error() {
    this._state.errorState()
  }

  public enableSpinners() {
    console.log('enabling spinners')
  }

  public disableSpinners() {
    console.log('disabling spinners')
  }

  public clearErrors() {
    console.log('clearing errors')
  }

  public showErrors() {
    console.log('some error occurred')
  }
}
