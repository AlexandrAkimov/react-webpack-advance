import type {
  ComponentMeta, ComponentStory,
} from '@storybook/react'

import { Avatar } from './Avatar'

export default {
  title: 'Shared/Avatar',
  component: Avatar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Avatar>

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />

export const Primary = Template.bind({})
Primary.args = {
  size: 150,
  src: 'https://avatars.githubusercontent.com/u/46198243?s=400&u=a0e5f7b6b9da86599e8571d4e6c424f771028abb&v=4',
}

export const Small = Template.bind({})
Small.args = {
  size: 50,
  src: 'https://avatars.githubusercontent.com/u/46198243?s=400&u=a0e5f7b6b9da86599e8571d4e6c424f771028abb&v=4',
}

