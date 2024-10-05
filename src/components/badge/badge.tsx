import { ElementType } from 'react'

import style from './badge.module.scss'

export const BadgeVariant = ['Complete', 'Progress', 'Review'] as const
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

  const className = variant ? `${style[`badge-${variant.toLowerCase()}`]}` : ''

  return (
    <Component className={className} {...rest}>
      {title}
    </Component>
  )
}
