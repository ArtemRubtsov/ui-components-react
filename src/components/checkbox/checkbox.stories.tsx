import type { Meta, StoryObj } from '@storybook/react'

import { CheckBox } from './checkbox'

const meta: Meta<typeof CheckBox> = {
  argTypes: {
    checked: { control: 'boolean' },
    className: { control: 'text' },
    disabled: { control: 'boolean' },
    label: { control: 'text' },
    onCheckedChange: { action: 'changed' },
  },
  component: CheckBox,
  title: 'Components/CheckBox',
}

export default meta
type Story = StoryObj<typeof CheckBox>

export const Default: Story = {
  args: {
    label: 'Check me',
  },
}

export const Checked: Story = {
  args: {
    checked: true,
    label: 'Checked box',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    label: 'Disabled box',
  },
}
