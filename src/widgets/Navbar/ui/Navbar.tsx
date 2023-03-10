import * as React from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import cls from './Navbar.module.scss'

interface INavbarProps {
  className?: string
}

export const Navbar: React.FC<INavbarProps> = ({ className }) => (
  <div className={classNames(cls.Navbar, {}, [className])}>
    <div className={cls.links}>
      <AppLink
        theme={AppLinkTheme.SECONDARY}
        to="/"
        className={cls.mainLink}
      >
        Main
      </AppLink>
      <AppLink theme={AppLinkTheme.SECONDARY} to="/about">About</AppLink>
    </div>

  </div>
)
