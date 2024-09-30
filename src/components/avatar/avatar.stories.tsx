import type { Meta, StoryObj } from '@storybook/react'

import { Avatar } from './'

const meta = {
  argTypes: {
    type: {
      control: { type: 'radio' },
      options: ['default', 'circle'],
    },
  },
  component: Avatar,
  tags: ['autodocs'],
  title: 'Components/Avatar',
} satisfies Meta<typeof Avatar>

export default meta
type story = StoryObj<typeof meta>

export const Default: story = {
  args: {
    alt: 'default',
    borderRadius: '3px',
    src: '',
    type: 'default',
  },
}
