import { fetchArticleById } from 'entities/Article/model/services/fetchArticleById/fetchArticleById'
import { articleDetailsReducer } from 'entities/Article/model/slice/articleDetailsSlice'
import {
  FC, memo, useCallback, useEffect,
} from 'react'
import { useSelector } from 'react-redux'
import { classNames } from 'shared/lib/classNames/classNames'
import {
  DynamicModuleLoader,
  ReducerList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { Text, TextAlign, TextSize } from 'shared/ui/Text/Text'
import { Skeleton } from 'shared/ui/Skeleton/Skeleton'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import EyeIcon from 'shared/assets/icons/eye-20-20.svg'
import CalendarIcon from 'shared/assets/icons/calendar-20-20.svg'
import { Icon } from 'shared/ui/Icon/Icon'
import { t } from 'i18next'
import { useTranslation } from 'react-i18next'
import cls from './ArticleDetails.module.scss'
import {
  getArticleDetailsIsLoading,
  getArticleDetailsData,
  getArticleDetailsError,
} from '../../model/selectors/articleDetails'
import { ArticleBlock, ArticleBlockType } from '../../model/types/article'
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent'
import {
  ArticleImageBlockComponent,
} from '../ArticleImageBlockComponent/ArticleImageBlockComponent'
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent'

interface ArticleDetailsProps {
  className?: string
  id: string
}

const reducers: ReducerList = {
  articleDetails: articleDetailsReducer,
}

export const ArticleDetails: FC<ArticleDetailsProps> = memo(({ className, id }) => {
  const dispatch = useAppDispatch()
  const isLoading = useSelector(getArticleDetailsIsLoading)
  const error = useSelector(getArticleDetailsError)
  const article = useSelector(getArticleDetailsData)
  const { t } = useTranslation()

  const renderBlock = useCallback((block: ArticleBlock) => {
    switch (block.type) {
      case ArticleBlockType.CODE:
        return (
          <ArticleCodeBlockComponent key={block.id}
            className={cls.block}
            block={block}
          />
        )
      case ArticleBlockType.IMG:
        return (
          <ArticleImageBlockComponent key={block.id}
            block={block}
            className={cls.block}
          />
        )
      case ArticleBlockType.TEXT:
        return (
          <ArticleTextBlockComponent key={block.id}
            block={block}
            className={cls.block}
          />
        )
      default:
        return null
    }
  }, [])

  let content

  if (isLoading) {
    content = (
      <>
        <Skeleton className={cls.avatar}
          width={200}
          height={200}
          border="50%"
        />
        <Skeleton className={cls.title}
          width={300}
          height={32}
        />
        <Skeleton className={cls.skeleton}
          width={600}
          height={24}
        />
        <Skeleton className={cls.skeleton}
          width="100%"
          height={200}
        />
        <Skeleton className={cls.skeleton}
          width="100%"
          height={200}
        />
      </>
    )
  } else if (error) {
    content = (
      <Text title={t('Произошла ошибка при загрузке статьи')}
        align={TextAlign.CENTER}
      />
    )
  } else {
    content = (
      <>
        <div className={cls.articleWrapper}>
          <Avatar size={200}
            src={article?.img}
            className={cls.avatar}
          />
        </div>
        <Text title={article?.title}
          text={article?.subtitle}
          className={cls.title}
          size={TextSize.L}
        />
        <div className={cls.articleInfo}>
          <Icon Svg={EyeIcon}
            className={cls.icon}
          />
          <Text text={String(article?.views)} />
        </div>
        <div className={cls.articleInfo}>
          <Icon Svg={CalendarIcon}
            className={cls.icon}
          />
          <Text text={article?.createdAt} />
        </div>
        {article?.blocks?.map(renderBlock)}
      </>
    )
  }

  useEffect(() => {
    dispatch(fetchArticleById(id))
  }, [dispatch, id])

  return (
    <DynamicModuleLoader reducers={reducers}
      removeAfterUnmount
    >
      <div className={classNames(cls.ArticleDetails, {}, [className])}>
        {content}
      </div>
    </DynamicModuleLoader>
  )
})
