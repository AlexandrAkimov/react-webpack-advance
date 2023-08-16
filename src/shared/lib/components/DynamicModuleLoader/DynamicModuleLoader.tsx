/* eslint-disable react/jsx-no-useless-fragment */
import { Reducer } from '@reduxjs/toolkit'
import {
  ReduxStoreWithManager,
  StateSchemaKey,
} from 'app/providers/StoreProvider/config/StateSchema'
import { FC, Fragment, useEffect } from 'react'
import { useDispatch, useStore } from 'react-redux'

interface DynamicModuleLoaderProps {
  name: StateSchemaKey
  reducer: Reducer
  removeAfterUnmount?: boolean
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (props) => {
  const {
    children, name, reducer, removeAfterUnmount,
  } = props
  const store = useStore() as ReduxStoreWithManager
  const dispatch = useDispatch()
  useEffect(() => {
    // @ts-ignore
    store.reducerManager.add(name, reducer)
    dispatch({ type: `@INIT ${name} reducer` })
    return () => {
      if (removeAfterUnmount) {
        // @ts-ignore
        store.reducerManager.remove(name)
        dispatch({ type: `@DESTROY ${name} reducer` })
      }
    }
    // eslint-disable-next-line
  }, [])
  return (
    <>
      {children}
    </>
  )
}
