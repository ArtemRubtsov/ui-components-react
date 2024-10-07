import { Meta, StoryObj } from '@storybook/react'

import { Badge, BadgeVariant } from './badge'

const meta: Meta<typeof Badge> = {
  argTypes: {
    variant: {
      control: { options: BadgeVariant, type: 'select' },
    },
  },
  component: Badge,
  tags: ['autodocs'],
  title: 'Components/Badge',
} satisfies Meta<typeof Badge>

export default meta

type Story = StoryObj<typeof Badge>

export const Complete: Story = {
  args: {
    title: 'Complete',
    variant: 'Complete',
  },
}

export const Progress: Story = {
  args: {
    title: 'In Progress',
    variant: 'Progress',
  },
}

export const Review: Story = {
  args: {
    title: 'Review',
    variant: 'Review',
  },
}

export const Check: Story = {
  args: {
    title: 'Check task',
    variant: 'Check',
  },
}

export const Danger: Story = {
  args: {
    title: 'Status danger',
    variant: 'Danger',
  },
}

export const Refactoring: Story = {
  args: {
    title: 'Refactoring',
    variant: 'Refactoring',
  },
}

export const Test: Story = {
  args: {
    title: 'Run test',
    variant: 'Test',
  },
}

export const Warning: Story = {
  args: {
    title: 'Warning',
    variant: 'Warning',
  },
}

export const Clossed: Story = {
  args: {
    title: 'Clossed',
    variant: 'Clossed',
  },
}
