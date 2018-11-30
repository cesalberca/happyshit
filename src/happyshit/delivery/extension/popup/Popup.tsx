import React from 'react'
import { StateContext } from '../../../../arch/delivery/states/StateContext'
import { bindDependencies } from '../../../../arch/bindDependencies'
import { TYPES } from '../../../../arch/types'
import { StateStrategy } from '../../ui/states/StateStrategy'
import { State } from '../../../../arch/delivery/states/State'
import { useProxy } from '../../../../arch/delivery/hooks/useProxy'
import { States } from '../../../../arch/delivery/states/States'
import { Strategy } from '../../../../arch/utils/Strategy'

const PopupComponent = (_stateContext: StateContext, _stateStrategy: StateStrategy) => {
  const stateContext = useProxy<StateContext>(_stateContext)
  const stateStrategy = useProxy<StateStrategy>(_stateStrategy)

  const errorStrategy: Strategy<State, string> = {
    check: state => state === stateContext.errorState,
    execute: () => 'red',
  }

  stateStrategy.addStrategy(errorStrategy)

  const setState = (state: States) => {
    stateContext.state = stateContext[state]
  }

  return (
    <div>
      <button onClick={() => setState(States.LOADING_STATE)}>Load</button>
      <button onClick={() => setState(States.LOADED_STATE)}>Unload</button>
      <button onClick={() => setState(States.ERROR_STATE)}>Error</button>

      <span className={stateStrategy.getValue(stateContext.state)}>{stateContext.ui.message}</span>
    </div>
  )
}

export const Popup = bindDependencies(PopupComponent, [TYPES.State, TYPES.StateStrategy]) as React.FunctionComponent<{}>
