import { FC, memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Text } from 'shared/ui/Text/Text'
import { Comment } from '../../model/types/Comment'
import cls from './CommentList.module.scss'
import { CommentCard } from '../CommentCard/CommentCard'

interface CommentListProps {
  className?: string
  comments?: Comment[]
  isLoading?: boolean
}

export const CommentList: FC<CommentListProps> = memo(({ className, comments, isLoading }) => {
  if (isLoading) {
    return (
      <div className={classNames(cls.CommentList, {}, [className])}>
        <CommentCard isLoading />
        <CommentCard isLoading />
        <CommentCard isLoading />
      </div>
    )
  }
  return (
    <div className={classNames(cls.CommentList, {}, [className])}>
      {comments?.length ? (
        comments?.map((comment) => (
          <CommentCard
            key={comment.id}
            comment={comment}
            className={cls.comment}
            isLoading={isLoading}
          />
        ))
      ) : (<Text text="Комментарии отсутствуют" />)}
    </div>
  )
})
