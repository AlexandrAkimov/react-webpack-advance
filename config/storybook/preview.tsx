import type { Preview } from '@storybook/react'
import React from 'react'
import { Theme } from '../../src/app/providers/ThemeProvider'
import 'app/styles/index.scss'
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { RouterDecorator } from '../../src/shared/config/storybook/RouterDecorator/RouterDecorator'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story) => ThemeDecorator(Story)(Theme.LIGHT),
    (Story) => RouterDecorator(Story),
  ],
}

export default preview
