import type { Meta, StoryObj } from '@storybook/react'

import { Avatar, VariantAvatar } from './'

const meta = {
  argTypes: {
    align: {
      control: { type: 'select' },
      description: 'Size of the avatar',
      options: ['justify-center', 'justify-end', 'justify-start', 'space-around', 'space-between'],
    },
    justify: {
      control: { type: 'select' },
      description: 'Size of the avatar',
      options: ['justify-center', 'justify-end', 'justify-start', 'space-around', 'space-between'],
    },
    src: {
      control: 'text',
      description: 'URL of  the image',
    },
    type: {
      control: { type: 'radio' },
      options: ['default', 'circle'],
    },
    variantType: {
      control: { type: 'select' },
      description: 'Size of the avatar',
      options: VariantAvatar,
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
    align: 'align-stretch',
    alt: 'default',
    justify: 'justify-center',
    size: { height: '24px', width: '24px' },
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4ACm_TQdcAeevcSrggAAGAlW86M2-HgNzAw&s',
    type: 'default',
    variantType: 'xxl',
  },
}

export const Circle: story = {
  args: {
    align: 'align-stretch',
    alt: 'default',
    justify: 'justify-center',
    size: { height: '24px', width: '24px' },
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4ACm_TQdcAeevcSrggAAGAlW86M2-HgNzAw&s',
    type: 'circle',
    variantType: 'xxl',
  },
}
