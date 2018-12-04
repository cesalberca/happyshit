import React from 'react'
import { Sizes } from '../sizes/Sizes'
import { SizesStrategy } from '../sizes/SizesStrategy'
import { ElementTypes } from '../elements/ElementTypes'
import { bindDependencies } from '../../../../arch/bindDependencies'
import { TYPES } from '../../../../arch/types'
import { ReactProps } from '../types'
import { styles } from '../styles/styles'

interface Props extends ReactProps {
  onClick: (event: React.SyntheticEvent) => void
  size: Sizes
}

const IconComponent = (sizesStrategy: SizesStrategy, { onClick, size, children, classNames }: Props) => {
  return (
    <button
      onClick={e => onClick(e)}
      className={sizesStrategy.getSizeStyles(size, ElementTypes.ICON) + ' ' + styles(classNames)}
    >
      {children}
    </button>
  )
}

export const Icon = bindDependencies(IconComponent, [TYPES.SizesStrategy]) as React.FunctionComponent<Props>
