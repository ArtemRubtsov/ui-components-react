import { ComponentPropsWithoutRef, ElementType } from 'react'

import clsx from 'clsx'

import s from './avatar.module.scss'

export const imgType = ['default', 'circle'] as const
export const Variant = ['xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl', 'xxxl'] as const

export type VariantType = (typeof Variant)[number]

export type TypeImg = (typeof imgType)[number]

type CustomSize = {
  height?: string
  width?: string
}

export type Props<T extends ElementType = 'img'> = {
  alt: string
  size?: CustomSize
  type: TypeImg
  variantType: VariantType
} & ComponentPropsWithoutRef<T>

export const Avatar = ({
  alt,
  size = { height: '40px', width: '40px' },
  type,
  variantType,
  ...rest
}: Props) => {
  return (
    <span className={clsx(s.avatar)} style={{ height: size.height, width: size.width }}>
      <img
        alt={alt || 'avatar'}
        className={clsx(s.avatarImg, s[type], s[variantType], s.size)}
        {...rest}
      />
    </span>
  )
}
