import React, { useState } from 'react'
import { StateContext } from '../../../../arch/delivery/states/StateContext'
import { bindDependencies } from '../../../bindDependencies'
import { TYPES } from '../../../types'
import { IStrategy, StateStrategy } from '../../ui/utils/StateStrategy'
import { State } from '../../../../arch/delivery/states/State'

const PopupComponent = (_stateContext: StateContext, _stateStrategy: StateStrategy) => {
  const [stateContext, setStateContext] = useState(_stateContext)
  const [stateStrategy] = useState(_stateStrategy)

  const errorStrategy: IStrategy<State, string> = {
    check: state => state === stateContext.errorState,
    execute: () => 'red',
  }

  stateStrategy.addStrategy(errorStrategy)

  return (
    <div>
      <button
        onClick={() => {
          stateContext.state = stateContext.loadingState
          setStateContext(stateContext)
        }}
      >
        Load
      </button>

      <button
        onClick={() => {
          stateContext.state = stateContext.loadedState
          setStateContext(stateContext)
        }}
      >
        Unload
      </button>

      <button
        onClick={() => {
          stateContext.state = stateContext.errorState
          setStateContext(stateContext)
        }}
      >
        Error
      </button>

      <span className={stateStrategy.getStrategyFor(stateContext.state)}>{stateContext.ui.message}</span>
    </div>
  )
}

export const Popup = bindDependencies(PopupComponent, [TYPES.State, TYPES.StateStrategy]) as React.FunctionComponent<{}>
