import { Meta, StoryObj } from '@storybook/react'

import { Card } from './'

const meta: Meta<typeof Card> = {
  argTypes: {
    customType: {
      control: { type: 'radio' },
      options: ['string', 'number', 'boolean'],
    },
  },
  component: Card,
  tags: ['autodocs'],
  title: 'Components/Card',
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    customType: 'string',
  },
}
