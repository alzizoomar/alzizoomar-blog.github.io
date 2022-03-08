import React from 'react'
import { Button, Box } from '@material-ui/core'

import './i18n'
import { useTranslation } from 'react-i18next'
/**
 * This function Change language  its display language switch button and change the selected language
 * @component
 * @see https://medium.com/@ricklee_10931/react-multi-lingual-with-react-i18next-57879f986168
 */
function LanguageSelector() {
  const { i18n } = useTranslation()

  /**
   * This function return language selected ar or en
   *  i18n.changeLanguage function to switch between languages
   * @param {string} lng  language selected 'ar' , 'en'
   * @return {string} 'en' or 'ar'
   */
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
  }

  return (
    <>
      <Box
        component="div"
        display={i18n.language === 'ar' ? 'none' : 'inherit'}
      >
        <Button variant="text" onClick={() => changeLanguage('ar')}>
          العربية
        </Button>
      </Box>
      <Box
        component="div"
        display={i18n.language === 'en' ? 'none' : 'inherit'}
      >
        <Button variant="text" onClick={() => changeLanguage('en')}>
          English
        </Button>
      </Box>
    </>
  )
}

export default LanguageSelector
