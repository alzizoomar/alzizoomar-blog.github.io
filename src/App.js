import React, { Suspense, lazy } from 'react'
import { useTranslation } from 'react-i18next'
import { Switch, Route } from 'react-router-dom'
import { SnackbarProvider } from 'notistack'
import { CircularProgress, IconButton } from '@material-ui/core'
import { Close } from '@material-ui/icons'

import MaterialTheme from './components/material-theme/material-theme.component'
import { SnackbarUtilsConfigurator } from './assets/utils/toaster'

import networkDetector from './components/hoc/network-detector/network-detector.component'
import Header from './components/header/header.component'

import './App.scss'
import './assets/styles/main.scss'

const Home = lazy(() => import('./modules/home/index'))
const Post = lazy(() => import('./modules/post/post.component'))
const NotFound404 = lazy(() => import('./modules/404/index.component'))

const App = () => {
  const { i18n } = useTranslation()

  document.getElementById('direction').dir = i18n.dir()
  const notistackRef = React.createRef()
  const onClickDismiss = (key) => () => {
    notistackRef.current.closeSnackbar(key)
  }

  return (
    <MaterialTheme>
      <SnackbarProvider
        ref={notistackRef}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        preventDuplicate
        action={(key) => (
          <IconButton onClick={onClickDismiss(key)} aria-label="delete">
            <Close />
          </IconButton>
        )}
      >
        <SnackbarUtilsConfigurator />
        <Header />
        <Suspense
          fallback={
            <div className="loader-div">
              <CircularProgress />
            </div>
          }
        >
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/post/:id" component={Post} />
            <Route path="*" component={NotFound404} />
          </Switch>
        </Suspense>
      </SnackbarProvider>
    </MaterialTheme>
  )
}

App.propTypes = {}

export default networkDetector(App)
