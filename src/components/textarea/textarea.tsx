import React, { ChangeEvent, ComponentPropsWithRef, useId } from 'react'

import clsx from 'clsx'

import s from './textarea.module.scss'

import { Text } from '../text'

type TextareaProps = {
  error?: string
  label?: string
} & ComponentPropsWithRef<'textarea'>

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, disabled, error, label, onChange, ...restProps }, ref) => {
    const id = useId()

    const changeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
      onChange?.(e)
    }

    return (
      <div className={className}>
        {label && (
          <Text
            as={'label'}
            className={clsx(s.label, disabled ? s.labelDisabled : '')}
            htmlFor={id}
          >
            {label}
          </Text>
        )}
        <textarea
          {...restProps}
          className={clsx(s.textarea, error ? s.textareaError : '')}
          disabled={disabled}
          id={id}
          onChange={changeHandler}
          ref={ref}
        />
        {error && (
          <Text as={'div'} color={'red'}>
            {error}
          </Text>
        )}
      </div>
    )
  }
)
