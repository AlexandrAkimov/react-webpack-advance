import { CSSProperties, FC, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames, Mods } from 'shared/lib/classNames/classNames'
import cls from './Avatar.module.scss'

interface AvatarProps {
  className?: string
  src?: string
  size?: number
  alt?: string
}

export const Avatar: FC<AvatarProps> = ({
  className, src, size, alt,
}) => {
  const { t } = useTranslation()
  const mods: Mods = {}

  const styles = useMemo<CSSProperties>(() => ({
    width: size || 100,
    height: size || 100,
  }), [size])
  return (
    <img src={src}
      alt={alt}
      style={styles}
      className={classNames(cls.Avatar, mods, [className])}
    />
  )
}
