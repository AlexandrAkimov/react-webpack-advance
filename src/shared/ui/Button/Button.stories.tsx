import type {
  ComponentMeta, ComponentStory,
} from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'

import { Button, ButtonSize, ThemeButton } from './Button'

export default {
  title: 'Shared/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: 'Primary',
}

export const Clear = Template.bind({})
Clear.args = {
  children: 'Clear',
  theme: ThemeButton.CLEAR,
}

export const Outline = Template.bind({})
Outline.args = {
  children: 'Outline',
  theme: ThemeButton.OUTLINE,
}

export const OutlineM = Template.bind({})
OutlineM.args = {
  children: 'Outline',
  theme: ThemeButton.OUTLINE,
  size: ButtonSize.M,
}

export const OutlineL = Template.bind({})
OutlineL.args = {
  children: 'Outline',
  theme: ThemeButton.OUTLINE,
  size: ButtonSize.L,
}

export const OutlineXL = Template.bind({})
OutlineXL.args = {
  children: 'Outline',
  theme: ThemeButton.OUTLINE,
  size: ButtonSize.XL,
}

export const OutlineDark = Template.bind({})
OutlineDark.args = {
  children: 'Outline',
  theme: ThemeButton.OUTLINE,
}
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)]

export const BackgroundTheme = Template.bind({})
BackgroundTheme.args = {
  children: 'BackgroundTheme',
  theme: ThemeButton.BACKGROUND,
}

export const BackgroundInvertedTheme = Template.bind({})
BackgroundInvertedTheme.args = {
  children: 'BackgroundInvertedTheme',
  theme: ThemeButton.BACKGROUND_INVERTED,
}

export const Square = Template.bind({})
Square.args = {
  children: '>',
  theme: ThemeButton.BACKGROUND_INVERTED,
  square: true,
}

export const SquareM = Template.bind({})
SquareM.args = {
  children: '>',
  theme: ThemeButton.BACKGROUND_INVERTED,
  square: true,
  size: ButtonSize.M,
}

export const SquareL = Template.bind({})
SquareL.args = {
  children: '>',
  theme: ThemeButton.BACKGROUND_INVERTED,
  square: true,
  size: ButtonSize.L,
}

export const SquareXL = Template.bind({})
SquareXL.args = {
  children: '>',
  theme: ThemeButton.BACKGROUND_INVERTED,
  square: true,
  size: ButtonSize.XL,
}
