import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'
import {
  FC, Suspense, useEffect,
} from 'react'
import { PageLoader } from 'widgets/PageLoader'
import { useDispatch, useSelector } from 'react-redux'
import { getUserInited, userActions } from 'entities/User'
import { useTheme } from './providers/ThemeProvider/lib/useTheme'
import { classNames } from '../shared/lib/classNames/classNames'
import { AppRouter } from './providers/router'

const App: FC = () => {
  const { theme } = useTheme()
  const dispatch = useDispatch()
  const inited = useSelector(getUserInited)
  useEffect(() => {
    dispatch(userActions.initAuthData())
  }, [dispatch])

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback={<PageLoader />}>
        <Navbar />
        <div className="content-page">
          <Sidebar />
          {inited && <AppRouter />}
        </div>
      </Suspense>
    </div>
  )
}

export default App
