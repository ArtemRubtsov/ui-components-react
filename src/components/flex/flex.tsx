import React, { ComponentPropsWithoutRef, ElementType } from 'react'

import clsx from 'clsx'

import s from './flex.module.scss'

export type FlexProps<T extends ElementType = 'div' | 'span'> = {
  align?: 'align-baseline' | 'align-center' | 'align-end' | 'align-start' | 'align-stretch'
  as?: T
  children?: React.ReactNode
  className?: string
  direction?: 'column' | 'column-revers' | 'row' | 'row-revers'
  display?: 'flex' | 'inline-flex' | 'none'
  gap?: 'g-l' | 'g-m' | 'g-s' | 'g-x-xl' | 'g-xl' | 'g-xs' | 'g-xxl' | 'g-xxs' | 'g-xxxl'
  gapX?: 'gx-l' | 'gx-m' | 'gx-s' | 'gx-x-xl' | 'gx-xl' | 'gx-xs' | 'gx-xxl' | 'gx-xxs' | 'gx-xxxl'
  gapY?: 'gy-l' | 'gy-m' | 'gy-s' | 'gy-x-xl' | 'gy-xl' | 'gy-xs' | 'gy-xxl' | 'gy-xxs' | 'gy-xxxl'
  justify?: 'center' | 'end' | 'space-around' | 'space-between' | 'space-evenly' | 'start'
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse'
} & ComponentPropsWithoutRef<T>

export const Flex = <T extends ElementType = 'div'>(props: FlexProps<T>) => {
  const {
    align = 'center',
    as: Component = 'div',
    children,
    className,
    direction = 'column',
    display = 'flex',
    gap = 'g-s',
    gapX = 'gx-s',
    gapY = 'gy-s',
    justify = 'between',
    wrap = 'wrap',
    ...rest
  } = props

  return (
    <Component
      className={clsx(
        s[display],
        s[direction],
        s[gap],
        s[wrap],
        s[justify],
        s[align],
        s[gapX],
        s[gapY],
        className
      )}
      {...rest}
    >
      {children}
    </Component>
  )
}
