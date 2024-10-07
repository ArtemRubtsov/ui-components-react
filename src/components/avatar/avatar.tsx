import { ComponentPropsWithoutRef, ElementType } from 'react'

import clsx from 'clsx'

import s from './avatar.module.scss'

export const imgType = ['default', 'circle'] as const

export type TypeImg = (typeof imgType)[number]

type CustomSize = {
  height?: string
  width?: string
}

export type Props<T extends ElementType = 'img'> = {
  alt: string
  borderRadius: string
  size?: CustomSize
  type: TypeImg
} & ComponentPropsWithoutRef<T>

export const Avatar = ({ alt, size = { height: '40px', width: '40px' }, type, ...rest }: Props) => {
  return (
    <span className={clsx(s.avatar)} style={{ height: size.height, width: size.width }}>
      <img alt={alt || 'avatar'} className={clsx(s.avatarImg, s[type])} {...rest} />
    </span>
  )
}
