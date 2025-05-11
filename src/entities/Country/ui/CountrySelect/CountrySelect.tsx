import { FC, memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { Select } from 'shared/ui/Select/Select'
import { Country } from '../../model/types/country'

interface CountrySelectProps {
  className?: string
  value?: Country
  onChange?: (value: Country) => void
  readonly?: boolean
}
const options = [
  { value: Country.Russia, content: Country.Russia },
  { value: Country.USA, content: Country.USA },
]
export const CountrySelect: FC<CountrySelectProps> = memo(({
  className, value, onChange, readonly,
}) => {
  const { t } = useTranslation()

  const onChangeHandler = useCallback((value: string) => {
    onChange?.(value as Country)
  }, [onChange])

  return (
    <Select className={classNames('', {}, [className])}
      label={t('Укажите страну')}
      options={options}
      onChange={onChangeHandler}
      readonly={readonly}
      value={value}
    />
  )
})
