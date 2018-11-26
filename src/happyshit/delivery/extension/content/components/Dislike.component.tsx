import React from 'react'
import { Icon } from '../../../ui/components/Icon.component'
import { ESizes } from '../../../ui/constants/ESizes'

interface Props {
  onClick: (event: React.SyntheticEvent) => void
}

export const Dislike: React.FunctionComponent<Props> = ({ onClick }) => {
  return (
    <Icon size={ESizes.SMALL} onClick={onClick}>
      💩
    </Icon>
  )
}
