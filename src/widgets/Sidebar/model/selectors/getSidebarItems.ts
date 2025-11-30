import { createSelector } from "@reduxjs/toolkit";
import { getUserAuthData } from "entities/User";
import i18next from "i18next";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import MainIcon from 'shared/assets/icons/main.svg'
import AbouteIcon from 'shared/assets/icons/aboute.svg'
import ProfileIcon from 'shared/assets/icons/profile.svg'
import ArticleIcon from 'shared/assets/icons/article.svg'
import { SidebarItemType } from "../types/sidebar";

export const getSidebarItems = createSelector(
  getUserAuthData,
  (userData) => {
    const sidebarItemsList: SidebarItemType[] = [
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
    ]

    if (userData?.id) {
      sidebarItemsList.push(
        {
          path: RoutePath.profile + userData?.id,
          text: i18next.t('Profile', { ns: 'about' }),
          icon: ProfileIcon,
          authOnly: true,
        },
        {
          path: RoutePath.articles,
          text: i18next.t('Статьи', { ns: 'about' }),
          icon: ArticleIcon,
          authOnly: true,
        }
      )
    }

    return sidebarItemsList

  }

)