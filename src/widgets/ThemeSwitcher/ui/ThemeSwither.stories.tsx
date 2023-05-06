import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'

import { ThemeSwitcher } from './ThemeSwitcher'

const meta: Meta<typeof ThemeSwitcher> = {
  title: 'Widget/ThemeSwitcher',
  component: ThemeSwitcher,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

export default meta
type Story = StoryObj<typeof ThemeSwitcher>;

export const Light: Story = {
  args: {},
}

export const Dark: Story = {
  args: {},
}
Dark.decorators = [(Story) => ThemeDecorator(Story)(Theme.DARK)]
