import { CSSProperties, ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

import clsx from 'clsx'

import s from './text.module.scss'

export const VariantText = ['l', 'm', 's', 'x-xl', 'xl', 'xs', 'xxl', 'xxs', 'xxxl'] as const

export type VariantSize = (typeof VariantText)[number]


export type Props<T extends ElementType = 'p'> = {
  align?: 'center' | 'left' | 'right'
  as?: T
  children?: ReactNode
  className?: string
  size?: VariantSize
  style?: CSSProperties
  textWrap?: 'balance' | 'nowrap' | 'pretty' | 'stable' | 'wrap' | 'wrap'
  weight?: 'bold' | 'light' | 'medium' | 'regular'
} & ComponentPropsWithoutRef<T>

export const Text = <T extends ElementType = 'span'>(props: TextProps<T>) => {
  const {
    align = 'left',
    as: Component = 'p',
    children,
    className,
    size = 'm',
    style,
    textWrap = 'stable',
    weight = 'regular',
    ...rest
  } = props

  return (
    <Component
      className={clsx(s.text, s[size], s[weight], s[align], s[textWrap], className)}
      style={style}
      {...rest}
    >
      {children}
    </Component>
  )
}
