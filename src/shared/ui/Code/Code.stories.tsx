import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { Code } from './Code'

export default {
  title: 'shared/Code',
  component: Code,
  argTypes: {
    backgroundColor: {
      control: 'color',
    },
  },
} as ComponentMeta<typeof Code>

const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />

export const Normal = Template.bind({})
Normal.args = {
  text: `export default {
    title: 'shared/Code',
    component: Code,
    argTypes: {
      backgroundColor: {
        control: 'color'
      }
    },
  } as ComponentMeta<typeof Code>`,
}

export const NormalDark = Template.bind({})
NormalDark.args = {
  text: `export default {
    title: 'shared/Code',
    component: Code,
    argTypes: {
      backgroundColor: {
        control: 'color'
      }
    },
  } as ComponentMeta<typeof Code>`,
}
NormalDark.decorators = [ThemeDecorator(Theme.DARK)]
