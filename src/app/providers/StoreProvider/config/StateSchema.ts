import {
  AnyAction, CombinedState, Dispatch, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit'
import { AxiosInstance } from 'axios'
import { ArticleDetailsSchema } from 'entities/Article'
import { CounterSchema } from 'entities/Counter'
import { ProfileSchema } from 'entities/Profile'
import { UserSchema } from 'entities/User'
import { AddCommentFormSchema } from 'features/addCommentForm'
import { LoginSchema } from 'features/AuthByUsername'
import { ArticleDetailsCommentsSchema } from 'pages/ArticlesDetailedPage'
import { NavigateOptions, To } from 'react-router-dom'

export interface StateSchema {
  counter: CounterSchema // demo example schema
  user: UserSchema

  // Async reducers
  profile?: ProfileSchema
  articleDetails?: ArticleDetailsSchema
  articleDetailsComments?: ArticleDetailsCommentsSchema
  addCommentForm?: AddCommentFormSchema
  loginForm?: LoginSchema
}

export type StateSchemaKey = keyof StateSchema

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>
  add: (key: StateSchemaKey, reducer: Reducer) => void
  remove: (key: StateSchemaKey) => void
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducer: ReducerManager
}

export interface ThunkExtraArg {
  api: AxiosInstance
  navigate?: (to: To, options?: NavigateOptions) => void
}

export interface ThunkConfig<T> {
  rejectValue: T
  extra: ThunkExtraArg
  state: StateSchema
}
