import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import {classNames} from "shared/lib/classNames/classNames"
import { Button } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'
import { Text } from 'shared/ui/Text/Text'
import { getProfileData } from '../model/selectors/getProfileData'
import { getProfileError } from '../model/selectors/getProfileError'
import { getProfileIsLoading } from '../model/selectors/getProfileIsLoading'
import cls from "./ProfileCard.module.scss"

interface ProfileCardProps {
  className?: string
}

export const ProfileCard: FC<ProfileCardProps> = ({className}) => {
  const { t } = useTranslation()
  const data = useSelector(getProfileData)
  const error = useSelector(getProfileError)
  const isLoading = useSelector(getProfileIsLoading)
  return (
    <div className={classNames(cls.ProfileCard, {}, [className])}>
      <div className={cls.header}>
        <Text title={t('Профиль')}/>
        <Button className={cls.editBtn}>
          {t('Редактировать')}
        </Button>
      </div>
      <div className={cls.data}>
        <Input
          value={data?.first}
          placeholder={t('Ваше имя')}
          className={cls.input}
        />
        <Input
          value={data?.lastName}
          placeholder={t('Ваше фамилия')}
          className={cls.input}
        />
      </div>
    </div>
  )
}

