// import React from 'react'
import { Theme } from 'app/providers/ThemeProvider'
import 'app/styles/index.scss'
import { FC, ReactNode } from 'react'

interface IDecorator {
  theme: Theme
}

export const ThemeDecorator = (Story: any) => function (theme: Theme) {
  return (
    <div className={`app ${theme} storybook`}>
      {Story()}
    </div>
  )
}
