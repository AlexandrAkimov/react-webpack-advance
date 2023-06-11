import React, { useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import { Modal } from 'shared/ui/Modal/Modal'
import cls from './Navbar.module.scss'

interface INavbarProps {
  className?: string
}

export const Navbar: React.FC<INavbarProps> = ({ className }) => {
  const [isAuthModal, setIsAuthModal] = useState(false)
  const onToggleModal = useCallback(() => {
    setIsAuthModal((prev) => !prev)
  }, [])
  const { t } = useTranslation('common')
  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <Button
        theme={ThemeButton.CLEAR_INVERTED}
        className={cls.links}
        onClick={onToggleModal}
      >
        {t('Войти')}
      </Button>
      <Modal
        isOpen={isAuthModal}
        onClose={onToggleModal}
      >
        {t('Lorem')}
      </Modal>
    </div>
  )
}
