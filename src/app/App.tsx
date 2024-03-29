import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'
import {
  FC, Suspense, useEffect,
} from 'react'
import { PageLoader } from 'widgets/PageLoader'
import { useDispatch } from 'react-redux'
import { userActions } from 'entities/User'
import { useTheme } from './providers/ThemeProvider/lib/useTheme'
import { classNames } from '../shared/lib/classNames/classNames'
import { AppRouter } from './providers/router'

const App: FC = () => {
  const { theme } = useTheme()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(userActions.initAuthData())
  }, [dispatch])

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback={<PageLoader />}>
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  )
}

export default App
