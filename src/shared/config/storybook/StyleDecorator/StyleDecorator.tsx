// import React from 'react'
import 'app/styles/index.scss'
import { ReactNode } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'

export const StyleDecorator = ({ children }: {children: ReactNode}) => (
  <div className={classNames('app', {}, ['storybook', 'light'])}>
    {children}
  </div>
)
