import React from 'react'
import { ESizes } from '../constants/ESizes'

interface Props {
  onClick: (event: React.SyntheticEvent) => void
  size: ESizes
}

export const Icon: React.FunctionComponent<Props> = ({ onClick, children }) => {
  return <button onClick={e => onClick(e)}>{children}</button>
}
