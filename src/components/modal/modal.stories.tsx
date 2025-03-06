import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { Button } from '../button'
import { Flex } from '../flex'
import { Modal } from './modal'

const meta: Meta<typeof Modal> = {
  component: Modal,
}

export default meta
type Story = StoryObj<typeof Modal>

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(true)

    return (
      <>
        <Button onClick={() => setOpen(true)} type={'button'} variant={'default'}>
          Open modal
        </Button>
        <Modal
          modalTitle={'This is component'}
          onClose={() => setOpen(false)}
          open={open}
          size={'md'}
        >
          <p>
            Do you really want to close the creation of a publication? If you close, everything will
            be deleted.
          </p>
          <Flex direction={'row'} gap={'g-xxxl'}>
            <Button type={'button'} variant={'secondary'}>
              Save draft
            </Button>
            <Button onClick={() => setOpen(false)} type={'button'} variant={'default'}>
              Discard
            </Button>
          </Flex>
        </Modal>
      </>
    )
  },
}
