import React, { ComponentPropsWithoutRef, useId } from 'react'

import * as CheckboxRadix from '@radix-ui/react-checkbox'
import { CheckIcon } from '@radix-ui/react-icons'
import clsx from 'clsx'

import s from './checkbox.module.scss'

import { Text } from '../text'

type Props = {
  className: string
  label: string
} & ComponentPropsWithoutRef<typeof CheckboxRadix.Root>

export const CheckBox = React.forwardRef<HTMLButtonElement, Partial<Props>>(
  ({ className, label, ...props }, ref) => {
    const id = useId()

    return (
      <>
        <CheckboxRadix.Root className={clsx(s.Root, className)} id={id} ref={ref} {...props}>
          <CheckboxRadix.Indicator className={s.Indicator}>
            <CheckIcon />
          </CheckboxRadix.Indicator>
        </CheckboxRadix.Root>
        {label && (
          <label className={s.label} htmlFor={id}>
            <Text>{label}</Text>
          </label>
        )}
      </>
    )
  }
)
