// import React from 'react'
import 'app/styles/index.scss'
import { BrowserRouter } from 'react-router-dom'

export const RouterDecorator = (Story: any) => (
  <BrowserRouter>
    {Story()}
  </BrowserRouter>
)
