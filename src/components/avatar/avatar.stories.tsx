import type { Meta, StoryObj } from '@storybook/react'

import { Avatar } from './'

const meta = {
  argTypes: {
    src: {
      control: 'text',
      description: 'URL of  the image',
    },
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
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4ACm_TQdcAeevcSrggAAGAlW86M2-HgNzAw&s',
    type: 'default',
  },
}
