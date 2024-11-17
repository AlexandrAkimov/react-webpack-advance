import type {
  ComponentMeta, ComponentStory,
} from '@storybook/react'
import { Country } from 'entities/Country'
import { Currency } from 'entities/Currency'
import { ReduxDecorator } from 'shared/config/storybook/ReduxDecorator/ReduxDecorator'

import { ProfileCard } from './ProfileCard'

export default {
  title: 'Entities/ProfileCard',
  component: ProfileCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ProfileCard>

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />

export const Primary = Template.bind({})
Primary.args = {
  data: {
    username: 'admin',
    first: 'Alex',
    lastName: 'Akimov',
    country: Country.Russia,
    currency: Currency.RUB,
    city: 'Ryazan',
    age: 35,
    avatar: 'https://avatars.githubusercontent.com/u/46198243?s=400&u=a0e5f7b6b9da86599e8571d4e6c424f771028abb&v=4',
  },
}

export const withError = Template.bind({})
withError.args = {
  error: 'true',
}

export const Loading = Template.bind({})
Loading.args = {
  isLoading: true,
}
