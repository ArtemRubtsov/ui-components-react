import { Meta, StoryObj } from '@storybook/react'

import { Flex } from './flex'

const meta = {
  component: Flex,
} satisfies Meta<typeof Flex>

export default meta
type Story = StoryObj<typeof Flex>

export const Empty: Story = {}
