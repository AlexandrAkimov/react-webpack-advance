import type {
  ComponentMeta, ComponentStory,
} from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { ReduxDecorator } from 'shared/config/storybook/ReduxDecorator/ReduxDecorator'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'

import LoginForm from './LoginForm'

export default {
  title: 'Features/LoginForm',
  component: LoginForm,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof LoginForm>

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />

export const Primary = Template.bind({})
Primary.args = {}
Primary.decorators = [ReduxDecorator({
  loginForm: { username: 'admin', password: '123' },
})]

export const errorForm = Template.bind({})
errorForm.args = {}
errorForm.decorators = [ReduxDecorator({
  loginForm: { username: 'admin', password: '123', error: 'Error text' },
})]

export const loadingForm = Template.bind({})
loadingForm.args = {}
loadingForm.decorators = [ReduxDecorator({
  loginForm: { isLoading: true },
})]
