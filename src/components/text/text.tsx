import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

import clsx from 'clsx'

import s from './text.module.scss'

export const Variant = ['l', 'm', 's', 'x-xl', 'xl', 'xs', 'xxl', 'xxs', 'xxxl'] as const

export type VariantSize = (typeof Variant)[number]

export type Props<T extends ElementType = 'div' | 'label' | 'p' | 'span'> = {
  align: 'center' | 'left' | 'right'
  as?: T
  children?: ReactNode
  className?: string
  color?: ''
  size?: VariantSize
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
    size = 'm',
    trim,
    weight,
    wrap,
    ...rest
  } = props

  return (
    <Component className={clsx(s.text, s[size], className)} {...rest}>
      {children}
    </Component>
  )
}
