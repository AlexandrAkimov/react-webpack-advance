import { FC, memo } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { Text, TextAlign } from 'shared/ui/Text/Text'
import cls from './ArticleImageBlockComponent.module.scss'
import { ArticleImgBlock } from '../../model/types/article'

interface ArticleImageBlockComponentProps {
  className?: string
  block: ArticleImgBlock
}

export const ArticleImageBlockComponent: FC<ArticleImageBlockComponentProps> = memo(
  ({ className, block }) => {
    const { t } = useTranslation()
    return (
      <div className={classNames(cls.ArticleImageBlockComponent, {}, [className])}>
        <img
          src={block.src}
          className={cls.img}
          alt={block.title}
        />
        {block.title && (
          <Text
            text={block.title}
            align={TextAlign.CENTER}
          />
        )}
      </div>
    )
  },
)
