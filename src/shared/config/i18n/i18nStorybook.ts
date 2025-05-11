import i18nStorybook from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

const supportedLngs = ['en', 'ru']
const ns = ['about']
i18nStorybook
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: false,
    lng: 'en',
    interpolation: {
      escapeValue: false,
    },
    defaultNS: 'common',
    ns,
  })

supportedLngs.forEach((lang) => {
  ns.forEach((n) => {
    i18nStorybook.addResources(
      lang,
      n,
      import(`../../../../public/locales/${lang}/${n}.json`),
    )
  })
})

export default i18nStorybook
