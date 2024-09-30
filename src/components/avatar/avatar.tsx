import { ComponentPropsWithoutRef, ElementType } from 'react'

import clsx from 'clsx'

import s from './avatar.module.scss'

export const imgType = ['default', 'circle'] as const

export type TypeImg = (typeof imgType)[number]

export type Props<T extends ElementType = 'img'> = {
  alt: string
  borderRadius: string
  type: TypeImg
} & ComponentPropsWithoutRef<T>

export const Avatar = ({ alt, type, ...rest }: Props) => {
  return (
    <div className={s.avatar}>
      <img alt={alt || 'avatar'} className={clsx(s[type])} {...rest} />
    </div>
  )
}
