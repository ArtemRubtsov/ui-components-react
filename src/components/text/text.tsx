import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

import clsx from 'clsx'

import s from './text.module.scss'

export type Props<T extends ElementType = 'span'> = {
  align: 'center' | 'left' | 'right'
  as?: T
  children: ReactNode
  className: string
  color?: ''
  size?: '12' | '14' | '16' | '18' | '20' | '24' | '28' | '32' | '60'
  trim?: 'both' | 'end' | 'normal' | 'start'
  weight?: 'bold' | 'light' | 'medium' | 'regular'
  wrap?: 'balance' | 'nowrap' | 'pretty' | 'wrap'
} & ComponentPropsWithoutRef<T>

export const Text = <T extends ElementType = 'span'>(props: Props<T>) => {
  const {
    as: Component = 'span',
    children,
    className,
    color,
    size,
    trim,
    weight,
    wrap,
    ...rest
  } = props

  return (
    <Component className={clsx(s.text)} {...rest}>
      {children}
    </Component>
  )
}
