import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Sidebar } from './Sidebar'

const meta: Meta<typeof Sidebar> = {
  title: 'Widget/Sidebar',
  component: Sidebar,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

export default meta
type Story = StoryObj<typeof Sidebar>;

export const Light: Story = {
  args: {},
}

export const Dark: Story = {
  args: {},
}

Dark.decorators = [(Story) => ThemeDecorator(Story)(Theme.DARK)]
