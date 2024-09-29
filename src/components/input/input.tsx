import { ComponentPropsWithoutRef } from 'react'

import { clsx } from 'clsx'

import s from './input.module.scss'

export const inputVariant = ['default', 'primary', 'secondary', 'tertiary'] as const
export const inputType = [
  'checkbox',
  'color',
  'date',
  'datetime',
  'datetime-local',
  'file',
  'number',
  'password',
  'radio',
  'range',
  'tel',
  'text',
  'submit',
] as const

export type inputWithVariant = (typeof inputVariant)[number]
export type inputWithType = (typeof inputType)[number]

export type InputProps = {
  fullWidth?: boolean
  type?: inputWithType
  variant?: inputWithVariant
} & ComponentPropsWithoutRef<'input'>

export const Input = (props: InputProps) => {
  const { className, fullWidth, type = 'text', variant = 'default', ...rest } = props

  const classNames = clsx(s.input, s[variant], fullWidth && s.fullWidth, className)

  return <input className={classNames} type={type} {...rest} />
}
