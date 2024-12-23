import type { Meta, StoryObj } from '@storybook/react'

import DatePicker from './DatePicker'

const meta = {
  argTypes: {
    onChange: { action: 'changed' },
  },
  component: DatePicker,
  title: 'Components/DatePicker',
} satisfies Meta<typeof DatePicker>

export default meta

export const Default: Story = {
  render: () => <DatePicker />,
}

type Story = StoryObj<typeof meta>
