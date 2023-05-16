// import React from 'react'
import { Story } from '@storybook/react'
import 'app/styles/index.scss'
import { Suspense } from 'react'

export const SuspendedDecorator = (story: () => Story) => (
  <Suspense fallback="">
    {story()}
  </Suspense>
)
