import { fetchProfileData, ProfileCard, profileReducer } from 'entities/Profile'
import { FC, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import {
  DynamicModuleLoader,
  ReducerList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'

interface ProfilePageProps {
  className?: string
}

const reducers: ReducerList = {
  profile: profileReducer,
}

const ProfilePage: FC<ProfilePageProps> = ({ className }) => {
  const { t } = useTranslation()

  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchProfileData())
  }, [dispatch])
  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames('', {}, [className])}>
        <ProfileCard />
      </div>
    </DynamicModuleLoader>

  )
}

export default ProfilePage
