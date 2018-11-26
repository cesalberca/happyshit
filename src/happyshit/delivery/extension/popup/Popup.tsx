import React, { useState } from 'react'
import { StateContext } from '../../../domain/states/StateContext'
import { bindDependencies } from '../../../bindDependencies'
import { TYPES } from '../../../types'

const PopupComponent = (_stateContext: StateContext) => {
  const [stateContext, setStateContext] = useState(_stateContext)

  return (
    <div>
      <button
        onClick={() => {
          stateContext.load()
          setStateContext(stateContext)
        }}
      >
        Load
      </button>

      <button
        onClick={() => {
          stateContext.loading()
          setStateContext(stateContext)
        }}
      >
        Unload
      </button>

      <button
        onClick={() => {
          stateContext.error()
          setStateContext(stateContext)
        }}
      >
        Error
      </button>
    </div>
  )
}

export const Popup = bindDependencies(PopupComponent, [TYPES.State]) as React.FunctionComponent<{}>
