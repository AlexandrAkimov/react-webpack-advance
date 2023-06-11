import { Counter } from 'entities/Counter'
import { t } from 'i18next'
import * as React from 'react'
import { useTranslation } from 'react-i18next'

interface IMainPageProps {
}

const MainPage: React.FC<IMainPageProps> = (props) => {
  const { t } = useTranslation('main')
  return (
    <div>
      {t('Главная страница')}
      {t('Еще текст')}
      <Counter />
    </div>
  )
}

export default MainPage
