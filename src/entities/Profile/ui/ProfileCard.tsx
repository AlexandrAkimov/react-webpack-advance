import { Country, CountrySelect } from 'entities/Country'
import { Currency, CurrencySelect } from 'entities/Currency'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames, Mods } from 'shared/lib/classNames/classNames'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import { Input } from 'shared/ui/Input/Input'
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text'
import { PageLoader } from 'widgets/PageLoader'
import { Profile } from '../model/types/profile'
import cls from './ProfileCard.module.scss'

interface ProfileCardProps {
  className?: string
  data?: Profile
  isLoading?: boolean
  error?: string
  readonly?: boolean
  onChangeFirstname?: (value?: string) => void
  onChangeLastname?: (value?: string) => void
  onChangeAge?: (value?: string) => void
  onChangeCity?: (value?: string) => void
  onChangeUsername?: (value?: string) => void
  onChangeAvatar?: (value?: string) => void
  onChangeCurrency?: (value?: Currency) => void
  onChangeCountry?: (value?: Country) => void
}

export const ProfileCard: FC<ProfileCardProps> = ({
  className,
  data,
  isLoading,
  error,
  readonly,
  onChangeFirstname,
  onChangeLastname,
  onChangeAge,
  onChangeCity,
  onChangeUsername,
  onChangeAvatar,
  onChangeCurrency,
  onChangeCountry,
}) => {
  const { t } = useTranslation()

  if (isLoading) {
    return (
      <div className={classNames(cls.ProfileCard, { [cls.loading]: true }, [className])}>
        <PageLoader />
      </div>
    )
  }

  if (error) {
    return (
      <div className={classNames(cls.ProfileCard, {}, [className, cls.loading])}>
        <Text
          theme={TextTheme.ERROR}
          title={t('Произошла ошибка')}
          text={t('попробуйте обновить страницу')}
          align={TextAlign.CENTER}
        />
      </div>
    )
  }

  const mods: Mods = {
    [cls.editing]: !readonly
  }

  return (
    <div className={classNames(cls.ProfileCard, mods, [className])}>
      <div className={cls.data}>
        {data?.avatar && (
          <div className={cls.avatarWrapper}>
            <Avatar src={data?.avatar} />
          </div>
        )}
        <Input
          value={data?.first}
          placeholder={t('Ваше имя')}
          className={cls.input}
          readonly={readonly}
          onChange={onChangeFirstname}
        />
        <Input
          value={data?.lastName}
          placeholder={t('Ваше фамилия')}
          className={cls.input}
          readonly={readonly}
          onChange={onChangeLastname}
        />
        <Input
          value={data?.age}
          placeholder={t('Ваш возраст')}
          className={cls.input}
          readonly={readonly}
          onChange={onChangeAge}
        />
        <Input
          value={data?.city}
          placeholder={t('Город')}
          className={cls.input}
          readonly={readonly}
          onChange={onChangeCity}
        />
        <Input
          value={data?.username}
          placeholder={t('Имя пользователя')}
          className={cls.input}
          readonly={readonly}
          onChange={onChangeUsername}
        />
        <Input
          value={data?.avatar}
          placeholder={t('Аватар')}
          className={cls.input}
          readonly={readonly}
          onChange={onChangeAvatar}
        />
        <CurrencySelect
          className={cls.input}
          value={data?.currency}
          onChange={onChangeCurrency}
          readonly={readonly}
        />
        <CountrySelect
          className={cls.input}
          value={data?.country}
          onChange={onChangeCountry}
          readonly={readonly}
        />
      </div>
    </div>
  )
}
