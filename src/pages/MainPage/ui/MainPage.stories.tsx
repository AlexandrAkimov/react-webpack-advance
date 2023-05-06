import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'

import MainPage from './MainPage'

const meta: Meta<typeof MainPage> = {
  title: 'Pages/MainPage',
  component: MainPage,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

export default meta
type Story = StoryObj<typeof MainPage>;

export const Light: Story = {
  args: {},
}

export const Dark: Story = {
  args: {},
}
Dark.decorators = [(Story) => ThemeDecorator(Story)(Theme.DARK)]
