import { Meta, StoryObj } from '@storybook/react'

import { Badge, BadgeVariant } from './badge' // Убедитесь, что вы импортируете BadgeVariant

const meta: Meta<typeof Badge> = {
  argTypes: {
    variant: {
      control: { options: BadgeVariant, type: 'select' }, // Используем 'select' с вариантами
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
    title: 'Under Review',
    variant: 'Review',
  },
}
