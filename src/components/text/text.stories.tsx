import { Meta, StoryObj } from '@storybook/react'

import { Text } from './text'

const meta: Meta<typeof Text> = {
  component: Text,
  title: 'Components/Text',
}

export default meta

type Story = StoryObj<typeof Text>

export const Empty: Story = {}

export const ElementP: Story = {
  render: args => (
    <Text as={'p'} {...args}>
      This is a paragraph element
    </Text>
  ),
}

export const ElementSpan: Story = {
  render: args => (
    <Text as={'span'} {...args}>
      This is a paragraph element
    </Text>
  ),
}

export const ElementDiv: Story = {
  render: args => (
    <Text as={'div'} {...args}>
      This is a paragraph element
    </Text>
  ),
}

export const ElementLabel: Story = {
  render: args => (
    <Text as={'label'} {...args}>
      This is a paragraph element
    </Text>
  ),
}
