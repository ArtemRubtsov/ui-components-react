import React from 'react'

import clsx from 'clsx'

import s from './card.module.scss'

export const divType = ['default', 'second', 'third'] as const
export type TypeDiv = (typeof divType)[number]

type Props = {
  children: React.ReactNode
  size: 'l' | 'm' | 's' | 'xs' | 'xxs'
  variant: TypeDiv
} & React.HTMLAttributes<HTMLDivElement>

export const Card = ({ children, className, size, variant, ...props }: Props) => {
  return (
    <div className={clsx(s.card, s[variant], s[size], className)} {...props}>
      {children}
    </div>
  )
}
