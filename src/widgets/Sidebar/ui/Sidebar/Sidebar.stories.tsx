import type { ComponentStory, Meta, StoryObj } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { ReduxDecorator } from 'shared/config/storybook/ReduxDecorator/ReduxDecorator'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Sidebar } from './Sidebar'

export default {
  title: 'Widget/Sidebar',
  component: Sidebar,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}
const Template: ComponentStory<typeof Sidebar> = (args) => <Sidebar {...args} />
export const Light = Template.bind({})
Light.args = {}
Light.decorators = [ThemeDecorator(Theme.LIGHT), ReduxDecorator({
  user: { authData: {} },
})]

export const Dark = Template.bind({})
Dark.args = {}

Dark.decorators = [ThemeDecorator(Theme.DARK), ReduxDecorator({
  user: { authData: {} },
})]

export const NoAuth = Template.bind({})
NoAuth.args = {}

NoAuth.decorators = [ReduxDecorator({
  user: { authData: undefined },
})]
