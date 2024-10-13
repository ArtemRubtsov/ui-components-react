import React, { ElementType } from 'react'

import clsx from 'clsx'

import s from './box.module.scss'

type BoxProps<T extends ElementType = 'div' | 'span'> = {
  as?: T
  children?: React.ReactNode
  className?: string
  display?: 'block' | 'inline' | 'inline-block'
}

export const Box = <T extends ElementType = 'div'>(props: BoxProps<T>) => {
  const { as: Component = 'div', children, className, display = 'block', ...rest } = props

  return (
    <Component className={clsx(s[display], className)} {...rest}>
      {children}
    </Component>
  )
}
