import { ComponentPropsWithoutRef, ElementType } from 'react'

import { clsx } from 'clsx'

import s from './Card.module.scss'

import cardImage from '../../assets/images.jpg'

export const cardVariant = ['withImg', 'withoutImg', 'default', 'BGcolor'] as const
export type CardVariant = (typeof cardVariant)[number]

// Тип пропсов для Card с возможностью указания динамического компонента
export type CardProps<T extends ElementType = 'article'> = {
  as?: T
  bgColors?: string[]
  fullWidth?: boolean
  variant?: CardVariant
} & Omit<ComponentPropsWithoutRef<T>, 'as' | 'className'>

// Основной компонент Card
export const Card = <T extends ElementType = 'article'>({
  as,
  bgColors,
  children,
  className,
  fullWidth,
  variant = 'default',
  ...rest
}: CardProps<T>) => {
  // Используем компонент, указанный в 'as', либо 'article' по умолчанию
  const Component = as || 'article'

  // Генерация классов для стилей
  const classNames = clsx(s.card, s[variant], fullWidth && s.fullWidth, className)

  const style =
    variant === 'BGcolor' && bgColors
      ? { backgroundColor: bgColors.join(', ') } // Применяем массив цветов
      : undefined

  return (
    <Component className={classNames} {...rest} style={style}>
      {variant !== 'withoutImg' && <img alt={cardImage} src={'#'} />}
      {children}
    </Component>
  )
}
