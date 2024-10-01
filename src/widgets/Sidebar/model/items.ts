import React from 'react'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import MainIcon from 'shared/assets/icons/main.svg'
import AbouteIcon from 'shared/assets/icons/aboute.svg'
import ProfileIcon from 'shared/assets/icons/profile.svg'

export interface SidebarItemType {
  path: string
  text: string
  icon: React.VFC<React.SVGProps<SVGSVGElement>>
  authOnly?: boolean
}

export const SidebarItemsList: SidebarItemType[] = [
  {
    path: RoutePath.main,
    text: 'Main',
    icon: MainIcon,
  },
  {
    path: RoutePath.about,
    text: 'About',
    icon: AbouteIcon,
  },
  {
    path: RoutePath.profile,
    text: 'Profile',
    icon: ProfileIcon,
    authOnly: true
  },
]
