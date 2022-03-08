import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { AppBar, Container, Toolbar } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import LanguageSelector from '../../i18next/LanguageSelector'
import { ReactComponent as Logo } from '../../assets/images/logo.svg'

import './header.styles.scss'

/**
 * useStyles create class for MUI elements
 * @date 2022-03-07
 * @param {Theme} MUI theme
 * @returns {ClassNameMap}
 */
const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: '#fffffff7',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}))
/**
 * Header functional component
 * @returns {JSX}
 */
const Header = () => {
  const classes = useStyles()
  const { t } = useTranslation()

  return (
    <AppBar className={classes.appBar} position="fixed">
      <Toolbar>
        <Container maxWidth="md">
          <div className="app-header">
            <Link to="/">
              <Logo />
            </Link>

            <div>
              <NavLink
                exact
                className="menu-item"
                activeClassName="active"
                to="/"
              >
                {t('NAVIGATION.HOME')}
              </NavLink>
            </div>

            <div>
              <LanguageSelector />
            </div>
          </div>
        </Container>
      </Toolbar>
    </AppBar>
  )
}

Header.propTypes = {}

export default Header
