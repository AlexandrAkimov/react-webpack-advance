// import React from 'react'
import { DeepPartial } from '@reduxjs/toolkit'
import { Story } from '@storybook/react'
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider'
import 'app/styles/index.scss'

export const ReduxDecorator = (state: DeepPartial<StateSchema>) => function (story: () => Story) {
  return (
    <StoreProvider initialState={state}>
      {story()}
    </StoreProvider>
  )
}
