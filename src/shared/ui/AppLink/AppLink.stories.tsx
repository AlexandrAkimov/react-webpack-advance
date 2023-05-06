import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'

import { AppLink, AppLinkTheme } from './AppLink'

const meta: Meta<typeof AppLink> = {
  title: 'Shared/AppLink',
  component: AppLink,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
}

export default meta
type Story = StoryObj<typeof AppLink>;

export const Primary: Story = {
  args: {
    children: 'Text',
    theme: AppLinkTheme.PRIMARY,
  },
}

export const Secondary: Story = {
  args: {
    children: 'Text',
    theme: AppLinkTheme.SECONDARY,
  },
}

export const Red: Story = {
  args: {
    children: 'Text',
    theme: AppLinkTheme.RED,
  },
}

export const PrimaryDark: Story = {
  args: {
    children: 'Text',
    theme: AppLinkTheme.PRIMARY,
  },
}
PrimaryDark.decorators = [(Story) => ThemeDecorator(Story)(Theme.DARK)]

export const SecondaryDark: Story = {
  args: {
    children: 'Text',
    theme: AppLinkTheme.SECONDARY,
  },
}
SecondaryDark.decorators = [(Story) => ThemeDecorator(Story)(Theme.DARK)]

export const RedDark: Story = {
  args: {
    children: 'Text',
    theme: AppLinkTheme.RED,
  },
}
RedDark.decorators = [(Story) => ThemeDecorator(Story)(Theme.DARK)]
