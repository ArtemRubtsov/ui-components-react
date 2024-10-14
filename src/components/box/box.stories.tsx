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
        <div style={{ backgroundColor: 'black', height: '64px', width: '64px' }}></div>
      </Box>
      <Box as={'span'} display={'inline-block'}>
        <div style={{ backgroundColor: 'green', height: '64px', width: '64px' }}></div>
      </Box>
      <Box as={'div'} display={'inline'}>
        <div style={{ backgroundColor: 'yellow', height: '64px', width: '64px' }}></div>
      </Box>
    </>
  ),
}

export const DisplayBlock: story = {
  args: {
    children: 'block',
    display: 'block',
  },
  render: () => (
    <>
      <Box as={'div'}>
        <div style={{ backgroundColor: 'black', height: '64px', width: '64px' }}></div>
      </Box>
    </>
  ),
}
export const DisplayInlineBox: story = {
  args: {
    display: 'inline-block',
  },
  render: () => (
    <>
      <Box as={'div'} display={'block'}>
        <div style={{ backgroundColor: 'black', height: '64px', width: '64px' }}></div>
      </Box>
    </>
  ),
}
export const DisplayInline: story = {
  args: {
    children: 'inline',
    display: 'inline',
  },
  render: () => (
    <>
      <Box as={'div'} display={'inline'}>
        <div style={{ backgroundColor: 'black', height: '64px', width: '64px' }}></div>
      </Box>
    </>
  ),
}
