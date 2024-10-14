import React, { ElementType } from 'react'

import clsx from 'clsx'

import s from './flex.module.scss'

type FlexProps<T extends ElementType = 'div' | 'span'> = {
  align: 'baseline' | 'center' | 'end' | 'stretch'
  as?: T
  children?: React.ReactNode
  className?: string
  direction?: 'column' | 'column-revers' | 'row' | 'row-revers'
  display?: 'flex' | 'inline-flex' | 'none'
  gap?: 'l' | 'm' | 's' | 'x-xl' | 'xl' | 'xs' | 'xxl' | 'xxs' | 'xxxl'
  gapX?: 'l' | 'm' | 's' | 'x-xl' | 'xl' | 'xs' | 'xxl' | 'xxs' | 'xxxl'
  gapY?: 'l' | 'm' | 's' | 'x-xl' | 'xl' | 'xs' | 'xxl' | 'xxs' | 'xxxl'
  justify?: 'between' | 'center' | 'end' | 'start'
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse'
}

export const Flex = <T extends ElementType = 'div'>(props: FlexProps<T>) => {
  const { as: Component = 'div', children, className } = props

  return <Component className={clsx(className)}>{children}</Component>
}
