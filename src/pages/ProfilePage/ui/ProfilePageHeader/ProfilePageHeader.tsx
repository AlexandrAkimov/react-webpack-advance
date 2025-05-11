import { getProfileReadOnly, profileActions, updateProfileData } from 'entities/Profile'
import { FC, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { classNames } from 'shared/lib/classNames/classNames'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import { Text } from 'shared/ui/Text/Text'
import cls from './ProfilePageHeader.module.scss'

interface ProfilePageHeaderProps {
  className?: string
}

export const ProfilePageHeader: FC<ProfilePageHeaderProps> = ({ className }) => {
  const { t } = useTranslation()
  const readonly = useSelector(getProfileReadOnly)
  const dispatch = useAppDispatch()
  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false))
  }, [dispatch])

  const onCancelEdit = useCallback(() => {
    dispatch(profileActions.cancelEdit())
  }, [dispatch])

  const onSave = useCallback(() => {
    dispatch(updateProfileData())
  }, [dispatch])

  return (
    <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
      <Text title={t('Профиль')} />
      <div>
        <Button className={cls.editBtn}
          theme={!readonly ? ThemeButton.OUTLINE_RED : ThemeButton.OUTLINE}
          onClick={readonly ? onEdit : onCancelEdit}
        >
          {t(`${readonly ? 'Редактировать' : 'Отменить'}`)}
        </Button>
        <Button className={cls.editBtn}
          onClick={onSave}
        >
          {t('Сохранить')}
        </Button>
      </div>

    </div>
  )
}
