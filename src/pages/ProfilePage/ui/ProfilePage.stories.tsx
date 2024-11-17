import type { ComponentStory, Meta, StoryObj } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { Country } from 'entities/Country'
import { Currency } from 'entities/Currency'
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
Light.decorators = [ReduxDecorator({
  profile: {
    form: {
      first: 'Alexandr',
      lastName: 'Akimov',
      age: 35,
      currency: Currency.RUB,
      country: Country.Russia,
      city: 'Ryazan',
      username: 'admin',
      avatar: 'https://avatars.githubusercontent.com/u/46198243?s=400&u=a0e5f7b6b9da86599e8571d4e6c424f771028abb&v=4',
    },
  },
})]
export const Dark = Template.bind({})
Dark.args = {}

Dark.decorators = [ThemeDecorator(Theme.DARK), ReduxDecorator({
  profile: {
    form: {
      first: 'Alexandr',
      lastName: 'Akimov',
      age: 35,
      currency: Currency.RUB,
      country: Country.Russia,
      city: 'Ryazan',
      username: 'admin',
      avatar: 'https://avatars.githubusercontent.com/u/46198243?s=400&u=a0e5f7b6b9da86599e8571d4e6c424f771028abb&v=4',
    },
  },
})]
