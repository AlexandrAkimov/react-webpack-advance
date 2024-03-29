import type { ComponentStory, Meta, StoryObj } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { ReduxDecorator } from 'shared/config/storybook/ReduxDecorator/ReduxDecorator'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Navbar } from './Navbar'

export default {
  title: 'Widget/Navbar',
  component: Navbar,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}
const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />
export const Light = Template.bind({})
Light.args = {}
Light.decorators = [ReduxDecorator({})]

export const Dark = Template.bind({})
Dark.args = {}

Dark.decorators = [ThemeDecorator(Theme.DARK), ReduxDecorator({})]

export const AuthNavbar = Template.bind({})
AuthNavbar.args = {}

AuthNavbar.decorators = [ThemeDecorator(Theme.DARK), ReduxDecorator({ user: {} })]
