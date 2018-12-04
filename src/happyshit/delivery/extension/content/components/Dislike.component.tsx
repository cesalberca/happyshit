import React from 'react'
import { Icon } from '../../../ui/components/Icon.component'
import { Sizes } from '../../../ui/sizes/Sizes'
import { ReactProps } from '../../../ui/types'

interface Props extends ReactProps {
  onClick: (event: React.SyntheticEvent) => void
}

export const Dislike: React.FunctionComponent<Props> = ({ onClick, classNames }) => {
  return (
    <Icon size={Sizes.SMALL} onClick={onClick} classNames={classNames}>
      💩
    </Icon>
  )
}
