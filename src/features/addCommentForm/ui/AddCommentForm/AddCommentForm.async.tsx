import { FunctionComponent, lazy } from 'react'
import { AddCommentFormProps } from './AddCommentForm'

export const AddCommentFormAsync = lazy<FunctionComponent<AddCommentFormProps>>(() => new Promise((resolve) => {
  // @ts-ignore
  setTimeout(() => resolve(import('./AddCommentForm')), 1500)
}))
