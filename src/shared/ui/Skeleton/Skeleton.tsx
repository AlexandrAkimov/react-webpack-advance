import { CSSProperties, FC, memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Skeleton.module.scss'

interface ISkeleton {
  className?: string
  height?: string | number
  width?: string | number
  border?: string
}

export const Skeleton: FC<ISkeleton> = memo(({
  className, width, height, border,
}) => {
  const styles: CSSProperties = {
    width,
    height,
    borderRadius: border,
  }
  return (
    <div
      style={styles}
      className={classNames(cls.Skeleton, {}, [className])}
    />
  )
})
