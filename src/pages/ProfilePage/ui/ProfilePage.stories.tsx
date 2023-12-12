import type { ComponentStory, Meta, StoryObj } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { ReduxDecorator } from 'shared/config/storybook/ReduxDecorator/ReduxDecorator'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'

import ProfilePage from './ProfilePage'

export default {
  title: 'Pages/ProfilePage',
  component: ProfilePage,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

const Template: ComponentStory<typeof ProfilePage> = (args) => <ProfilePage {...args} />

export const Light = Template.bind({})
Light.args = {}
Light.decorators = [ReduxDecorator({})]
export const Dark = Template.bind({})
Dark.args = {}

Dark.decorators = [ThemeDecorator(Theme.DARK), ReduxDecorator({})]
