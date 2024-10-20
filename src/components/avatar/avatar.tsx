import { CSSProperties, ImgHTMLAttributes } from 'react'

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

export type Props = {
  align?: 'align-baseline' | 'align-center' | 'align-end' | 'align-start' | 'align-stretch'
  alt?: string
  className?: string
  display?: 'block' | 'flex' | 'inline' | 'inline-block'
  justify?: 'justify-center' | 'justify-end' | 'justify-start' | 'space-around' | 'space-between'
  size?: CustomSize
  style?: CSSProperties
  type: TypeImg
  variantType: VariantType
} & ImgHTMLAttributes<HTMLImageElement>

export const Avatar = ({
  align = 'align-stretch',
  alt,
  className,
  display = 'inline-block',
  size = { height: '40px', width: '40px' },
  style,
  type,
  variantType,
  ...rest
}: Props) => {
  return (
    <span
      className={clsx(s.avatar, s[display], s[align])}
      style={{ height: size.height, width: size.width }}
    >
      <img
        alt={alt || 'avatar'}
        className={clsx(s.avatar, s[type], s[variantType], s.size, className)}
        style={style}
        {...rest}
      />
    </span>
  )
}
