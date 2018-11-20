import React, { useState } from 'react'
import { StateContext } from '../../../../application/states/StateContext'

export function Popup() {
  const [stateContext, setStateContext] = useState(StateContext.instance)

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
