import type {
  ComponentMeta, ComponentStory,
} from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'

import { Modal } from './Modal'

export default {
  title: 'Shared/Modal',
  component: Modal,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Modal>

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />

export const Primary = Template.bind({})
Primary.args = {
  isOpen: true,
  children: 'Lorem',
}

export const Dark = Template.bind({})
Dark.args = {
  isOpen: true,
  children: 'Lorem',
}

Dark.decorators = [ThemeDecorator(Theme.DARK)]
