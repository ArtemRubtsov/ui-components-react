import { CSSProperties, ElementType } from 'react'

import clsx from 'clsx'

import s from './badge.module.scss'

export const BadgeVariant = [
  'complete',
  'progress',
  'review',
  'check',
  'danger',
  'refactoring',
  'test',
  'warning',
  'closed',
] as const

export type VariantBadge = (typeof BadgeVariant)[number]

type Props<T extends ElementType = 'span'> = {
  align?: 'align-baseline' | 'align-center' | 'align-end' | 'align-start' | 'align-stretch'
  as?: T
  className?: string
  display?: 'block' | 'flex' | 'inline' | 'inline-block'
  justify?: 'justify-center' | 'justify-end' | 'justify-start' | 'space-around' | 'space-between'
  style?: CSSProperties
  title: string
  variant?: VariantBadge
}

export const Badge = <T extends ElementType = 'span'>(props: Props<T>) => {
  const {
    align = 'align-start',
    as: Component = 'span',
    className,
    display = 'inline',
    justify = 'justify-start',
    style,
    title,
    variant = 'check',
    ...rest
  } = props

  return (
    <Component
      className={clsx(s[variant], s[display], s[justify], s[align], className)}
      style={style}
      {...rest}
    >
      {title}
    </Component>
  )
}
