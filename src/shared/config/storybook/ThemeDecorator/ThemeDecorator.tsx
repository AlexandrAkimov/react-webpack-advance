import { Story } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import 'app/styles/index.scss'

export const ThemeDecorator = (theme: Theme) => function (story: () => Story) {
  return (
    <div className={`app ${theme}`}>
      {story()}
    </div>
  )
}
