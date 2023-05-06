import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'

import { PageLoader } from './PageLoader'

const meta: Meta<typeof PageLoader> = {
  title: 'Widget/PageLoader',
  component: PageLoader,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

export default meta
type Story = StoryObj<typeof PageLoader>;

export const Ligth: Story = {
  args: {},
}

export const Dark: Story = {
  args: {},
}
Dark.decorators = [(Story) => ThemeDecorator(Story)(Theme.DARK)]
