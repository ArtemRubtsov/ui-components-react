import { Meta, StoryObj } from '@storybook/react'

import { Card } from './'

const meta = {
  argTypes: {
    customType: {
      control: { type: 'radio' },
      options: ['string', 'number', 'boolean'],
    },
    src: {
      control: { type: 'text' },
      description: 'src',
    },
  },
  component: Card,
  tags: ['autodocs'],
  title: 'Components/Card',
} satisfies Meta<typeof Card>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    customType: 'string',
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4ACm_TQdcAeevcSrggAAGAlW86M2-HgNzAw&s',
  },
}
