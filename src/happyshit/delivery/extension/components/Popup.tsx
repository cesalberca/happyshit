import React, { useState } from 'react'
import { StateContext } from '../../../application/states/StateContext'

export function Popup() {
  const _stateContext = new StateContext()
  const [stateContext, setStateContext] = useState(_stateContext)

  return (
    <div>
      <p>IsLoaded: {stateContext.isLoaded ? 'true' : 'false'}</p>
      <p>IsLoading: {stateContext.isLoading ? 'true' : 'false'}</p>
      <p>IsError: {stateContext.isError ? 'true' : 'false'}</p>
      <button
        onClick={() => {
          _stateContext.load()
          setStateContext(_stateContext)
        }}
      >
        Load
      </button>

      <button
        onClick={() => {
          _stateContext.loading()
          setStateContext(_stateContext)
        }}
      >
        Unload
      </button>

      <button
        onClick={() => {
          _stateContext.error()
          setStateContext(_stateContext)
        }}
      >
        Error
      </button>
    </div>
  )
}
