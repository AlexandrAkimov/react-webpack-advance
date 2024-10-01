import { getUserAuthData } from 'entities/User'
import { FC, memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { SidebarItemType } from 'widgets/Sidebar/model/items'
import cls from './SidebarItem.module.scss'

interface SidebarItemProps {
  item?: SidebarItemType
  collapsed?: boolean
}

export const SidebarItem: FC<SidebarItemProps> = memo(({ item, collapsed }) => {
  const { t } = useTranslation()
  const isAuth = useSelector(getUserAuthData)

  if (!isAuth && item?.authOnly) {
    return null
  }
  return (
    <AppLink
      theme={AppLinkTheme.SECONDARY}
      to={item?.path || ''}
      className={cls.item}
    >
      {item && <item.icon className={cls.icon} />}
      <span className={cls.link}>{t(item?.text || '')}</span>
    </AppLink>
  )
})
