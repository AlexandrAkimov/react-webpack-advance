import { memo, useCallback, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector, useStore } from 'react-redux'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'
import { Text, TextTheme } from 'shared/ui/Text/Text'
import { ReduxStoreWithManager } from 'app/providers/StoreProvider/config/StateSchema'
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername'
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading'
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword'
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError'
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername'
import { loginActions, loginReducer } from '../../model/slice/loginSlice'
import cls from './LoginForm.module.scss'

export interface LoginFormProps {
  className?: string
}

const LoginForm = memo(({ className }: LoginFormProps) => {
  const dispatch = useDispatch()
  const store = useStore() as ReduxStoreWithManager
  const { t } = useTranslation()
  const username = useSelector(getLoginUsername)
  const isLoading = useSelector(getLoginIsLoading)
  const password = useSelector(getLoginPassword)
  const error = useSelector(getLoginError)

  const onChangeUsername = useCallback((value: string) => {
    dispatch(loginActions.setUsername(value))
  }, [dispatch])

  const onChangePassword = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value))
  }, [dispatch])

  const onLoginClick = useCallback(() => {
    dispatch(loginByUsername({ username, password }))
  }, [dispatch, password, username])

  useEffect(() => {
    // @ts-ignore
    store.reducerManager.add('loginForm', loginReducer)

    return () => {
      // @ts-ignore
      store.reducerManager.remove('loginForm')
    }
    // @ts-ignore
  }, [store.reducerManager])
  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <Text title={t('Форма авторизации')} />
      {error && <Text text={error} theme={TextTheme.ERROR} />}
      <Input
        autoFocus
        placeholder={t('Введите имя пользователя')}
        onChange={onChangeUsername}
        value={username}
      />
      <Input
        placeholder={t('Введите пароль')}
        type="password"
        onChange={onChangePassword}
        value={password}
      />
      <Button
        className={cls.loginBtn}
        theme={ThemeButton.OUTLINE}
        onClick={onLoginClick}
        disabled={isLoading}
      >
        {t('Войти')}
      </Button>
    </div>
  )
})

export default LoginForm