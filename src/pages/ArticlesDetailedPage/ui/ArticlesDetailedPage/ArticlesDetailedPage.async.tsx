import { lazy } from 'react'

export const ArticlesDetailedPageAsync = lazy(() => new Promise((resolve) => {
  // @ts-ignore
  setTimeout(() => resolve(import('./ArticlesDetailedPage')), 1500)
}))
