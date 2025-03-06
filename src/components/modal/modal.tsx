import { ComponentPropsWithoutRef } from 'react'

import * as Dialog from '@radix-ui/react-dialog'
import { Cross2Icon } from '@radix-ui/react-icons'
import clsx from 'clsx'

import s from './modal.module.scss'

type ModalSize = 'lg' | 'md' | 'sm'

type Props = {
  modalTitle: string
  onClose: () => void
  open: boolean
  size?: ModalSize
} & ComponentPropsWithoutRef<'div'>

export const Modal = ({
  children,
  className,
  modalTitle,
  onClose,
  open,
  size = 'md',
  ...rest
}: Props) => (
  <Dialog.Root onOpenChange={onClose} open={open} {...rest}>
    <Dialog.Portal>
      <Dialog.Overlay className={s.Overlay} />
      <Dialog.Content className={clsx(s.Content, s[size], className)}>
        <Dialog.Title className={s.Title}>{modalTitle}</Dialog.Title>
        <hr />
        {children}
        <Dialog.Close asChild>
          <button aria-label={'Close'} className={s.IconButton} type={'button'}>
            <Cross2Icon />
          </button>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
)
