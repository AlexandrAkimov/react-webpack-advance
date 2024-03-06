import { Story } from '@storybook/react'
import { StoryFnReactReturnType } from '@storybook/react/dist/ts3.9/client/preview/types'
import { Theme } from 'app/providers/ThemeProvider'
import 'app/styles/index.scss'

export const ThemeDecorator = (theme: Theme) => function (story: () => StoryFnReactReturnType) {
  return (
    <div className={`app ${theme}`}>
      {story()}
    </div>
  )
}
