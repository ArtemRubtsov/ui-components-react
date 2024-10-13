import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'

import { Meta, StoryObj } from '@storybook/react'

import { Text } from './text'

type Props = {
  align: 'center' | 'left' | 'right'
  as?: 'span' | undefined
  children?: ReactNode
  className?: string
  color?: ''
  size?: 'l' | 'm' | 's' | 'x-xl' | 'xl' | 'xs' | 'xxl' | 'xxs' | 'xxxl'
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
    <Text align={'center'} as={'p'} weight={'regular'} wrap={'balance'} {...args}>
      This is a p element
    </Text>
  ),
}

export const ElementSpan: Story = {
  render: args => (
    <Text align={'center'} as={'span'} weight={'regular'} wrap={'balance'} {...args}>
      This is a span element
    </Text>
  ),
}

export const ElementDiv: Story = {
  render: args => (
    <Text align={'left'} as={'div'} weight={'medium'} wrap={'balance'} {...args}>
      This is a div element
    </Text>
  ),
}

export const ElementLabel: Story = {
  render: args => (
    <Text align={'right'} as={'label'} weight={'light'} wrap={'balance'} {...args}>
      This is a label element
    </Text>
  ),
}

export const Size = {
  parameters: {
    group: 'Size',
  },
  render: () => (
    <>
      <Text align={'center'} as={'div'} size={'xxs'}>
        xxs
      </Text>
      <hr></hr>
      <Text align={'center'} as={'div'} size={'xs'}>
        xs
      </Text>
      <hr></hr>
      <Text align={'center'} as={'div'} size={'s'}>
        s
      </Text>
      <hr></hr>
      <Text align={'center'} as={'div'} size={'m'}>
        m
      </Text>
      <hr></hr>
      <Text align={'center'} as={'div'} size={'l'}>
        l
      </Text>
      <hr></hr>
      <Text align={'center'} as={'div'} size={'xl'}>
        xl
      </Text>
      <hr></hr>
      <Text align={'center'} as={'div'} size={'xxl'}>
        xxl
      </Text>
      <hr></hr>
      <Text align={'center'} as={'div'} size={'xxxl'}>
        xxl
      </Text>
      <hr></hr>
      <Text align={'center'} as={'div'} size={'x-xl'}>
        x-xl
      </Text>
    </>
  ),
}
