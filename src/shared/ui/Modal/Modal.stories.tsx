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
  children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti facilis porro est dolore excepturi. Distinctio autem nemo eos quia aspernatur soluta esse voluptate doloribus at eveniet, ratione nobis expedita corporis?',
}

export const Dark = Template.bind({})
Dark.args = {
  isOpen: true,
  children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti facilis porro est dolore excepturi. Distinctio autem nemo eos quia aspernatur soluta esse voluptate doloribus at eveniet, ratione nobis expedita corporis?',
}

Dark.decorators = [ThemeDecorator(Theme.DARK)]
