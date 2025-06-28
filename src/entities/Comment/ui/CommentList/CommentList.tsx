import { Comment } from '../../model/types/Comment'
import { FC, memo } from 'react'
import { classNames } from "shared/lib/classNames/classNames"
import cls from "./CommentList.module.scss"
import { CommentCard } from '../CommentCard/CommentCard'
import { Text } from 'shared/ui/Text/Text'

interface CommentListProps {
  className?: string
  comments?: Comment[]
  isLoading?: boolean
}

export const CommentList: FC<CommentListProps> = memo(({ className, comments, isLoading }) => {
  return (
    <div className={classNames(cls.CommentList, {}, [className])}>
      {comments?.length ? (
        comments?.map(comment => (
          <CommentCard key={comment.id} comment={comment} className={cls.comment} isLoading={isLoading} />
        ))
      ) : (<Text text='Комментарии отсутствуют' />)
      }
    </div>
  )
})

