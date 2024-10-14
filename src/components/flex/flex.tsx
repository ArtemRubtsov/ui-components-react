import React, { ElementType } from 'react'

import s from './flex.module.scss'

type FlexProps<T extends ElementType = 'div' | 'span'> = {
  as?: T
  children?: React.ReactNode
}

export const Flex = <T extends ElementType = 'div'>(props: FlexProps<T>) => {
  const { as: Component = 'div', children } = props

  return <Component>{children}</Component>
}
