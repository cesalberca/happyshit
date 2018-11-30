import React from 'react'
import { Icon } from '../../../ui/components/Icon.component'
import { Sizes } from '../../../ui/sizes/Sizes'

interface Props {
  onClick: (event: React.SyntheticEvent) => void
}

export const Dislike: React.FunctionComponent<Props> = ({ onClick }) => {
  return (
    <Icon size={Sizes.SMALL} onClick={onClick}>
      💩
    </Icon>
  )
}
