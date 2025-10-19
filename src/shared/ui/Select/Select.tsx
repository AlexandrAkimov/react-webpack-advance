import {
  ChangeEvent, FC, memo, useMemo,
} from 'react'
import { useTranslation } from 'react-i18next'
import { classNames, Mods } from 'shared/lib/classNames/classNames'
import cls from './Select.module.scss'

interface SelectOption {
  value: string
  content: string
}

interface SelectProps {
  className?: string
  label?: string
  options?: SelectOption[]
  value?: string
  onChange?: (val: string) => void
  readonly?: boolean
}

export const Select: FC<SelectProps> = memo((props: SelectProps) => {
  const {
    className, label, options, onChange, value, readonly,
  } = props

  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e.target.value)
  }

  const optionList = useMemo(
    () => options?.map((opt: SelectOption) => (
      <option
        value={opt.value}
        className={cls.option}
        key={opt.value}
      >
        {opt.content}
      </option>
    )),
    [options],
  )
  const mods: Mods = {}
  return (
    <div className={classNames(cls.Wrapper, mods, [className])}>
      {label && (
        <span className={cls.label}>
          {`${label}>`}
        </span>
      )}
      <select
        className={cls.select}
        value={value}
        onChange={onChangeHandler}
        disabled={readonly}
      >
        {optionList}
      </select>
    </div>
  )
})
