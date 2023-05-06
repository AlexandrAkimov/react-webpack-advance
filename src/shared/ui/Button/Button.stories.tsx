import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'

import { Button, ThemeButton } from './Button'

const meta: Meta<typeof Button> = {
  title: 'Shared/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

export default meta
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: 'Primary',
  },
}

export const Clear: Story = {
  args: {
    children: 'Clear',
    theme: ThemeButton.CLEAR,
  },
}

export const Outline: Story = {
  args: {
    children: 'Outline',
    theme: ThemeButton.OUTLINE,
  },
}

export const OutlineDark: Story = {
  args: {
    children: 'Outline',
    theme: ThemeButton.OUTLINE,
  },
}
OutlineDark.decorators = [(Story) => ThemeDecorator(Story)(Theme.DARK)]
