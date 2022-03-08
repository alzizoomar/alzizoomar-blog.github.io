import i18n from 'i18next'
import detector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

import translationEN from './locales/en/translation.json'
import translationAR from './locales/ar/translation.json'
// configuration file of translation
/**
 * we use i18nex from Translation
 * @module
 * @see https://medium.com/@ricklee_10931/react-multi-lingual-with-react-i18next-57879f986168
 * @see https://react.i18next.com/latest/withtranslation-hoc
 */
const availableLanguages = ['en', 'ar']

// the translations
const resources = {
  en: {
    translation: translationEN,
  },
  ar: {
    translation: translationAR,
  },
}

i18n
  .use(detector) // detect user language

  .use(initReactI18next) // pass the i18n instance to react-i18next.

i18n.use(initReactI18next).init({
  language: 'en',
  resources,
  initImmediate: true,
  fallbackLng: 'en', // if user computer language is not on the list of available languages, than we will be using the fallback language specified earlier
  debug: process.env.NODE_ENV === 'development',
  supportedLngs: availableLanguages,

  interpolation: {
    escapeValue: false,
  },
  /* order: [ 'cookie', 'localStorage', 'navigator', 'htmlTag', 'path', 'subdomain','querystring',],

  // keys or params to lookup language from
  //lookupQuerystring: 'lng',
  lookupCookie: 'i18next',
  lookupLocalStorage: 'i18nextLng',
  lookupFromPathIndex: 0,
  lookupFromSubdomainIndex: 0,

  // cache user language on
  caches: ['localStorage', 'cookie'],
  excludeCacheFor: ['cimode'], // languages to not persist (cookie, localStorage) */

  // detection: {
  //  order: ["cookies","path", "navigator"]
  // },
  // backend: {
  //   //loadPath: '/translation/{{lng}}.json',
  //   //  allowMultiLoading: false
  // },
  react: {
    useSuspense: true,
  },
})

export default i18n
