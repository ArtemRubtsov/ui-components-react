import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

import clsx from 'clsx'

import s from './text.module.scss'

export const VariantText = ['l', 'm', 's', 'x-xl', 'xl', 'xs', 'xxl', 'xxs', 'xxxl'] as const

export type VariantSize = (typeof VariantText)[number]

export type TextProps<T extends ElementType = 'div' | 'label' | 'p' | 'span'> = {
  align?: 'center' | 'left' | 'right'
  as?: T
  children?: ReactNode
  className?: string
  size?: VariantSize
  weight?: 'bold' | 'light' | 'medium' | 'regular'
  wrap?: 'balance' | 'nowrap' | 'pretty' | 'wrap'
} & ComponentPropsWithoutRef<T>

export const Text = <T extends ElementType = 'span'>(props: TextProps<T>) => {
  const {
    align = 'left',
    as: Component = 'span',
    children,
    className,
    size = 'm',
    weight = 'regular',
    wrap = 'balance',
    ...rest
  } = props

  return (
    <Component className={clsx(s.text, s[size], s[weight], s[align], s[wrap], className)} {...rest}>
      {children}
    </Component>
  )
}
