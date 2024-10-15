import { Meta, StoryObj } from '@storybook/react'

import { Flex } from './flex'

const meta = {
  component: Flex,
  title: 'Components/Flex',
} satisfies Meta<typeof Flex>

export default meta
type Story = StoryObj<typeof Flex>

export const FlexVariant: Story = {
  parameters: {
    group: 'Variant',
  },
  render: args => (
    <div style={{ margin: '0, auto', maxWidth: '1170px' }}>
      <Flex as={'div'} direction={'column'} display={'flex'} {...args}>
        <div
          style={{
            backgroundColor: 'blue',
            border: '1px solid black',
            boxSizing: 'border-box',
            height: '64px',
            width: '64px',
          }}
        ></div>
        <div
          style={{
            backgroundColor: 'blue',
            border: '1px solid black',
            boxSizing: 'border-box',
            height: '64px',
            width: '64px',
          }}
        ></div>
        <div
          style={{
            backgroundColor: 'blue',
            border: '1px solid black',
            boxSizing: 'border-box',
            height: '64px',
            width: '64px',
          }}
        ></div>
      </Flex>
    </div>
  ),
}
