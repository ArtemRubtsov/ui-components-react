import { Meta, StoryObj } from '@storybook/react'

import { Text } from './text'

const meta: Meta<typeof Text> = {
  component: Text,
  title: 'Components/Text',
}

export default meta

type Story = StoryObj<typeof Text>

export const Empty: Story = {}

export const WithText: Story = {
  render: args => <Text {...args}>12323</Text>,
}
