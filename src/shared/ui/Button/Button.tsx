import { ButtonHTMLAttributes } from "react"
import { classNames } from "shared/lib/classNames/classNames"
import cls from "./Button.module.scss"

export enum ThemeButton {
  CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: ThemeButton
}

export const Button: React.FC<ButtonProps> = (props) => {
  const { className, children, theme, ...buttonProps } = props
  return (
    <button
      className={classNames(cls.Button, {}, [className, cls[theme]])}
      {...buttonProps}
    >
      {children}
    </button>
  )
}

