import React from 'react'
import {
  unstable_createMuiStrictModeTheme as createMuiTheme,
  ThemeProvider,
} from '@material-ui/core/styles'
import { useTranslation } from 'react-i18next'
import PropTypes from 'prop-types'

const MaterialTheme = ({ children }) => {
  const { i18n } = useTranslation()
  const theme = createMuiTheme({
    palette: {
      primary: {
        light: '#FFAC5F',
        main: '#FF9F45',
        dark: '#FF8512',
        contrastText: '#fff',
      },
    },
    direction: i18n.dir(),
    typography: {
      fontFamily:
        i18n.dir() === 'ltr'
          ? '"Inter", Arial, Helvetica, sans-serif'
          : '"Tajawal", Arial, Helvetica, sans-serif',
      button: {
        textTransform: 'none',
        fontSize: 14,
      },
      body1: {
        fontSize: '1.4rem',
      },
      body2: {
        fontSize: '1rem',
      },
    },
  })
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

MaterialTheme.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}

export default MaterialTheme
