import type { Meta, StoryObj } from '@storybook/react'

import { Textarea } from './textarea'

const meta = {
  argTypes: {
    disabled: { control: 'boolean' },
    error: { control: 'text' },
    label: { control: 'text' },
    placeholder: { control: 'text' },
    value: { control: 'text' },
  },
  component: Textarea,
  title: 'Components/Textarea',
} satisfies Meta<typeof Textarea>

export default meta

type Story = StoryObj<typeof meta>

export const TextareaDefault: Story = {
  args: {},
}

export const TextareaWithLabel: Story = {
  args: {
    label: 'Text-area',
  },
}

export const TextareaWithPlaceholder: Story = {
  args: {
    placeholder: 'Text-area',
  },
}

export const TextareaWithError: Story = {
  args: {
    error: 'Error text',
  },
}

export const TextareaDisable: Story = {
  args: {
    disabled: true,
  },
}

export const TextareaDisableWithLabel: Story = {
  args: {
    disabled: true,
    label: 'Text-area',
  },
}

export const TextareaDisableWithPlaceholder: Story = {
  args: {
    disabled: true,
    placeholder: 'Text-area',
  },
}
