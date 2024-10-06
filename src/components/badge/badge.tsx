import { ElementType } from 'react'

import clsx from 'clsx'

import s from './badge.module.scss'

export const BadgeVariant = [
  'Complete',
  'Progress',
  'Review',
  'Check',
  'Danger',
  'Refactoring',
  'Test',
  'Warning',
  'Clossed',
] as const

export type VariantBadge = (typeof BadgeVariant)[number]

type Props<T extends ElementType = 'span'> = {
  as?: T
  title: string
  variant?: VariantBadge
}

export const Badge = <T extends ElementType = 'span'>({
  as,
  title,
  variant,
  ...rest
}: Props<T>) => {
  const Component = as || 'span'

  const className = variant ? `${s[`badge-${variant.toLowerCase()}`]}` : ''
  // const style = clsx(variant ? `${s[`badge-${variant.toLowerCase()}`]}` : '')

  return (
    <Component className={className} {...rest}>
      {title}
    </Component>
  )
}
