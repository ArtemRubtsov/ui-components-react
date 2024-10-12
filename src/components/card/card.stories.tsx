import { Meta, StoryObj } from '@storybook/react'

import { Avatar } from '../avatar'
import { Card } from './'

const meta = {
  argTypes: {
    size: {
      control: { type: 'radio' },
      description: 'size  of the card',

      options: ['xxs', 'xs', 's', 'm', 'l'],
    },
    variant: {
      control: { type: 'radio' },
      description: 'variant of the  card',
      options: ['default', 'second', 'third'],
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
    children: (
      <>
        <Avatar
          alt={''}
          src={
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4ACm_TQdcAeevcSrggAAGAlW86M2-HgNzAw&s'
          }
          type={'default'}
          variantType={'s'}
        />
        <div>Card content</div>
      </>
    ),
    size: 'xxs',
    variant: 'default',
  },
  render: args => <Card {...args} />,
}

export const Second: Story = {
  args: {
    children: (
      <>
        <Avatar
          alt={''}
          src={
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4ACm_TQdcAeevcSrggAAGAlW86M2-HgNzAw&s'
          }
          type={'default'}
          variantType={'s'}
        />
        <div>Card content</div>
      </>
    ),
    size: 'xs',
    variant: 'second',
  },
  render: args => <Card {...args} />,
}

export const Third: Story = {
  args: {
    children: (
      <>
        <Avatar
          alt={''}
          src={
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4ACm_TQdcAeevcSrggAAGAlW86M2-HgNzAw&s'
          }
          type={'default'}
          variantType={'s'}
        />
        <div>Card content</div>
      </>
    ),
    size: 's',
    variant: 'third',
  },
  render: args => <Card {...args} />,
}
