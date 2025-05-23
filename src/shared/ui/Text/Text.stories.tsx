import type {
  ComponentMeta, ComponentStory,
} from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'

import { Text, TextSize, TextTheme } from './Text'

export default {
  title: 'Shared/Text',
  component: Text,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Text>

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />

export const Primary = Template.bind({})
Primary.args = {
  title: 'Title lorem ipsum',
  text: 'Text lorem ipsum',
}

export const Error = Template.bind({})
Error.args = {
  title: 'Title lorem ipsum',
  text: 'Text lorem ipsum',
  theme: TextTheme.ERROR,
}

export const onlyTitle = Template.bind({})
onlyTitle.args = {
  title: 'Title lorem ipsum',
}

export const onlyText = Template.bind({})
onlyText.args = {
  text: 'Text lorem ipsum',
}

export const PrimaryDark = Template.bind({})
PrimaryDark.args = {
  title: 'Title lorem ipsum',
  text: 'Text lorem ipsum',
}
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]

export const ErrorDark = Template.bind({})
ErrorDark.args = {
  title: 'Title lorem ipsum',
  text: 'Text lorem ipsum',
  theme: TextTheme.ERROR,
}
ErrorDark.decorators = [ThemeDecorator(Theme.DARK)]

export const onlyTitleDark = Template.bind({})
onlyTitleDark.args = {
  title: 'Title lorem ipsum',
}
onlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)]

export const onlyTextDark = Template.bind({})
onlyTextDark.args = {
  text: 'Text lorem ipsum',
}
onlyTextDark.decorators = [ThemeDecorator(Theme.DARK)]

export const SizeL = Template.bind({})
SizeL.args = {
  title: 'Title lorem ipsum',
  text: 'Text lorem ipsum',
  size: TextSize.L,
}

export const SizeM = Template.bind({})
SizeM.args = {
  title: 'Title lorem ipsum',
  text: 'Text lorem ipsum',
  size: TextSize.M,
}
