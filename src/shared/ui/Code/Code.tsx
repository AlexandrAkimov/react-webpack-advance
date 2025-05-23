import {
  FC, memo, ReactNode, useCallback,
} from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import CopyIcon from 'shared/assets/icons/copy.svg'
import { Button, ThemeButton } from '../Button/Button'
import { Icon } from '../Icon/Icon'
import cls from './Code.module.scss'

interface CodeProps {
  className?: string
  text: string
}

export const Code: FC<CodeProps> = memo(({ className, text }) => {
  const onCopy = useCallback(() => {
    navigator.clipboard.writeText(text)
  }, [text])
  return (
    <pre className={classNames(cls.Code, {}, [className])}>
      <Button onClick={onCopy}
        className={cls.copyBtn}
        theme={ThemeButton.CLEAR}
      >
        <CopyIcon className={cls.copyIcon} />
      </Button>
      <code>
        {text}
      </code>
    </pre>

  )
})
