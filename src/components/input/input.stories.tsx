import type { Meta, StoryObj } from '@storybook/react'

import { Input } from './'

const meta = {
  argTypes: {
    type: {
      control: 'select',
      options: [
        'checkbox',
        'color',
        'date',
        'datetime',
        'datetime-local',
        'file',
        'number',
        'password',
        'radio',
        'range',
        'tel',
        'text',
        'submit',
      ],
    },
    variant: {
      control: { type: 'radio' },
      options: ['primary', 'secondary', 'tertiary', 'default'],
    },
  },
  component: Input,
  tags: ['autodocs'],
  title: 'Components/Input',
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 16 }}>
      <label htmlFor={'test'}>name </label>
      <Input name={'test'} type={'text'} variant={'default'} />
    </div>
  ),
}

export const Primary: Story = {
  args: {
    disabled: false,
    type: 'text',
    variant: 'primary',
  },
}
export const Checkbox: Story = {
  args: {
    type: 'checkbox',
  },
}

export const Secondary: Story = {
  args: {
    disabled: false,
    type: 'color',
    variant: 'secondary',
  },
}
export const Tertiary: Story = {
  args: {
    disabled: false,
    type: 'date',
    variant: 'tertiary',
  },
}

export const FullWidth: Story = {
  args: {
    disabled: false,
    fullWidth: true,
    type: 'password',
    variant: 'primary',
  },
}
