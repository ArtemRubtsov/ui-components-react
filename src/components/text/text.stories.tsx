import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'

import { Meta, StoryObj } from '@storybook/react'

import { Text } from './text'

type Props = {
  align: 'center' | 'left' | 'right'
  as?: 'span' | undefined
  children?: ReactNode
  className?: string
  color?: ''
  size?: '12' | '14' | '16' | '18' | '20' | '24' | '28' | '32' | '60'
  trim?: 'both' | 'end' | 'normal' | 'start'
  weight?: 'bold' | 'light' | 'medium' | 'regular'
  wrap?: 'balance' | 'nowrap' | 'pretty' | 'wrap'
} & Omit<DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, 'ref'>

const meta: Meta<typeof Text> = {
  component: Text,
  title: 'Components/Text',
}

export default meta

type Story = StoryObj<typeof Text>

export const Empty: Story = {}

export const ElementVariants = {
  parameters: {
    group: 'ElementType',
  },
  render: (args: Props) => (
    <>
      <Text as={'p'} {...args}>
        This is a paragraph element
      </Text>
      <Text as={'span'} {...args}>
        This is a span element
      </Text>
      <Text as={'div'} {...args}>
        This is a div element
      </Text>
      <Text as={'label'} {...args}>
        This is a label element
      </Text>
    </>
  ),
}

export const ElementP: Story = {
  render: args => (
    <Text as={'p'} {...args}>
      This is a p element
    </Text>
  ),
}

export const ElementSpan: Story = {
  render: args => (
    <Text as={'span'} {...args}>
      This is a span element
    </Text>
  ),
}

export const ElementDiv: Story = {
  render: args => (
    <Text as={'div'} {...args}>
      This is a div element
    </Text>
  ),
}

export const ElementLabel: Story = {
  render: args => (
    <Text as={'label'} {...args}>
      This is a label element
    </Text>
  ),
}
