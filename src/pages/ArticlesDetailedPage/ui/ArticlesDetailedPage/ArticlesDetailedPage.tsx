import { ArticleDetails } from 'entities/Article'
import { FC, memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticlesDetailedPage.module.scss'

interface ArticlesDetailedPageProps {
  className?: string
}

const ArticlesDetailedPage: FC<ArticlesDetailedPageProps> = ({ className }) => {
  const { t } = useTranslation()
  const { id } = useParams()

  if (!id) {
    return (
      <div className={classNames(cls.ArticlesDetailedPage, {}, [className])}>
        {t('Статья не найдена')}
      </div>
    )
  }
  return (
    <div className={classNames(cls.ArticlesDetailedPage, {}, [className])}>
      <ArticleDetails id={id} />
    </div>
  )
}

export default memo(ArticlesDetailedPage)
