import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { PageError } from './PageError'

const meta: Meta<typeof PageError> = {
  title: 'Widget/PageError',
  component: PageError,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

export default meta
type Story = StoryObj<typeof PageError>;

export const Light: Story = {
  args: {},
}

export const Dark: Story = {
  args: {},
}

Dark.decorators = [(Story) => ThemeDecorator(Story)(Theme.DARK)]
