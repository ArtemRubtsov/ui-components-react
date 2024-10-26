import type { Meta, StoryObj } from '@storybook/react'

import { Button } from './'

const meta = {
  argTypes: {
    circle: {
      control: { type: 'check' },
      options: ['circle'],
    },
    onClick: { action: 'clicked' },
    variant: {
      control: { type: 'radio' },
      options: ['primary', 'secondary', 'tertiary', 'link', 'default'],
    },
  },
  component: Button,
  tags: ['autodocs'],
  title: 'Components/Button',
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const ButtonStory: Story = {
  render: () => {
    return (
      <>
        <div
          style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginBottom: '20px' }}
        >
          <Button variant={'default'}>Default Button</Button>
          <Button variant={'primary'}>Primary Button</Button>
          <Button variant={'secondary'}>Secondary Button</Button>
          <Button variant={'link'}>Link</Button>
          <Button variant={'link2'}>Link2</Button>
        </div>
        <hr />
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', maxWidth: '200px' }}>
            <h2 style={{ fontFamily: 'monospace', fontWeight: 'normal' }}>
              Without circle property
            </h2>
            <Button variant={'default'}>Default Button</Button>
            <Button variant={'primary'}>Primary Button</Button>
            <Button variant={'secondary'}>Secondary Button</Button>
            <Button variant={'link'}>Link</Button>
            <Button variant={'link2'}>Link2</Button>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', maxWidth: '200px' }}>
            <h2 style={{ fontFamily: 'monospace', fontWeight: 'normal' }}>With circle property</h2>
            <Button circle variant={'default'}>
              Default Button
            </Button>
            <Button circle variant={'primary'}>
              Primary Button
            </Button>
            <Button circle variant={'secondary'}>
              Secondary Button
            </Button>
            <Button circle variant={'link'}>
              Link
            </Button>
            <Button circle variant={'link2'}>
              Link2
            </Button>
          </div>
        </div>
      </>
    )
  },
}

export const Primary: Story = {
  args: {
    children: 'Primary Button',
    disabled: false,
    variant: 'primary',
  },
}

export const Default: Story = {
  args: {
    children: 'Default Button',
    disabled: false,
    variant: 'default',
  },
}

export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    disabled: false,
    variant: 'secondary',
  },
}

export const Link: Story = {
  args: {
    children: 'Button that looks like a link',
    disabled: false,
    variant: 'link',
  },
}

export const Link2: Story = {
  args: {
    children: 'Button that looks like a link',
    disabled: false,
    variant: 'link2',
  },
}

export const FullWidth: Story = {
  args: {
    children: 'Full Width Button',
    disabled: false,
    fullWidth: true,
    variant: 'primary',
  },
}

export const AsLink: Story = {
  args: {
    as: 'a',
    children: 'Link that looks like a button',
    href: 'https://google.com',
    rel: 'noopener noreferrer',
    target: '_blank',
    variant: 'primary',
  },
}
