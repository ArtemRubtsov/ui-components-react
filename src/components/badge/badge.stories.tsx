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
    variant: 'complete',
  },
}

export const Progress: Story = {
  args: {
    title: 'In Progress',
    variant: 'progress',
  },
}

export const Review: Story = {
  args: {
    title: 'Review',
    variant: 'review',
  },
}

export const Check: Story = {
  args: {
    title: 'Check task',
    variant: 'check',
  },
}

export const Danger: Story = {
  args: {
    title: 'Status danger',
    variant: 'danger',
  },
}

export const Refactoring: Story = {
  args: {
    title: 'Refactoring',
    variant: 'refactoring',
  },
}

export const Test: Story = {
  args: {
    title: 'Run test',
    variant: 'test',
  },
}

export const Warning: Story = {
  args: {
    title: 'warning',
    variant: 'warning',
  },
}

export const Clossed: Story = {
  args: {
    title: 'Closed',
    variant: 'closed',
  },
}
