import { Meta, StoryObj } from '@storybook/react'

import { Box } from './'

const meta = {
  args: {},
  component: Box,
  tags: ['autodocs'],
  title: 'Components/Box',
} satisfies Meta<typeof Box>

export default meta
type story = StoryObj<typeof Box>

export const Display = {
  parameters: {
    group: 'Display',
  },
  render: () => (
    <>
      <Box as={'div'} display={'block'}>
        block
      </Box>
      <Box as={'span'} display={'inline-block'}>
        inline-block
      </Box>
      <Box as={'div'} display={'inline'}>
        inline
      </Box>
    </>
  ),
}

export const DisplayBox: story = {
  args: {
    children: 'block',
    display: 'block',
  },
}
export const DisplayInlineBox: story = {
  args: {
    display: 'inline-block',
  },
  render: () => (
    <>
      <Box as={'div'} display={'block'}>
        Inline-block
      </Box>
    </>
  ),
}
export const DisplayInline: story = {
  args: {
    children: 'inline',
    display: 'inline',
  },
}
