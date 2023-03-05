import { useTranslation } from "react-i18next"
import i18n from "shared/config/i18n/i18n"
import { classNames } from "shared/lib/classNames/classNames"
import { Button, ThemeButton } from "shared/ui/Button/Button"
import cls from "./LangSwitcher.module.scss"

interface LangSwitcherProps {
  className?: string
}

export const LangSwitcher: React.FC<LangSwitcherProps> = ({ className }) => {
  const { t } = useTranslation()
  const toggleLn = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }
  return (
    <Button
      className={classNames(cls.LangSwitcher, {}, [className])}
      theme={ThemeButton.CLEAR}
      onClick={toggleLn}
    >
      {t('Язык')}
    </Button>
  )
}

