import { CSSProperties, ComponentPropsWithoutRef, ElementType } from 'react'

import { clsx } from 'clsx'

import s from './button.module.scss'

export const buttonVariant = ['default', 'link', 'link2', 'primary', 'secondary'] as const

export type ButtonVariant = (typeof buttonVariant)[number]

export type ButtonProps<T extends ElementType = 'button'> = {
  as?: T
  circle?: boolean
  fullWidth?: boolean
  style?: CSSProperties
  variant?: ButtonVariant
} & ComponentPropsWithoutRef<T>

export const Button = <T extends ElementType = 'button'>(props: ButtonProps<T>) => {
  const {
    as: Component = 'button',
    circle,
    className,
    fullWidth,
    variant = 'primary',
    ...rest
  } = props

  const classNames = clsx(
    s.button,
    s[variant],
    fullWidth && s.fullWidth,
    circle && s.circle,
    className
  )

  return <Component className={classNames} {...rest} />
}
