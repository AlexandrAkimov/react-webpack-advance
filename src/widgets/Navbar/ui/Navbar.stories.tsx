import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Navbar } from './Navbar'

const meta: Meta<typeof Navbar> = {
  title: 'Widget/Navbar',
  component: Navbar,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

export default meta
type Story = StoryObj<typeof Navbar>;

export const Light: Story = {
  args: {},
}

export const Dark: Story = {
  args: {},
}

Dark.decorators = [(Story) => ThemeDecorator(Story)(Theme.DARK)]
