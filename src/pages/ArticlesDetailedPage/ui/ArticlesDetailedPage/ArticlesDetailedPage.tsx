import { ArticleDetails } from 'entities/Article'
import { CommentList } from 'entities/Comment'
import { FC, memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'
import { classNames } from 'shared/lib/classNames/classNames'
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { Text } from 'shared/ui/Text/Text'
import { useDispatch, useSelector } from 'react-redux'
import { getArticleCommentsError, getArticleCommentsIsLoading } from 'pages/ArticlesDetailedPage/model/selectors/comments'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect'
import { fetchCommentsByArticleId } from 'pages/ArticlesDetailedPage/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId'
import { AddCommentForm } from 'features/addCommentForm'
import cls from './ArticlesDetailedPage.module.scss'
import { articleDetailsCommentsReducer, getArticleComments } from '../../model/slices/articleDetailsCommentSlice'
import { addCommentForArticle } from 'pages/ArticlesDetailedPage/model/services/addCommentForArticle/addCommentForArticle'

interface ArticlesDetailedPageProps {
  className?: string
}

const reducers: ReducerList = {
  articleDetailsComments: articleDetailsCommentsReducer,
}

const ArticlesDetailedPage: FC<ArticlesDetailedPageProps> = ({ className }) => {
  const { t } = useTranslation()
  const { id } = useParams<{ id: string }>()
  const comments = useSelector(getArticleComments.selectAll)
  const commentsIsLoading = useSelector(getArticleCommentsIsLoading)
  const dispatch = useDispatch()

  const onSendComment = useCallback((text) => {
    dispatch(addCommentForArticle(text))
  }, [dispatch])

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id))
  })

  if (!id) {
    return (
      <div className={classNames(cls.ArticlesDetailedPage, {}, [className])}>
        {t('Статья не найдена')}
      </div>
    )
  }
  return (
    <DynamicModuleLoader
      reducers={reducers}
      removeAfterUnmount
    >
      <div className={classNames(cls.ArticlesDetailedPage, {}, [className])}>
        <ArticleDetails id={id} />
        <Text
          className={cls.commentTitle}
          title={t('Комментарии')}
        />
        <AddCommentForm
          onSendComment={onSendComment}
        />
        <CommentList
          comments={comments}
          isLoading={commentsIsLoading}
        />
      </div>
    </DynamicModuleLoader>

  )
}

export default memo(ArticlesDetailedPage)
