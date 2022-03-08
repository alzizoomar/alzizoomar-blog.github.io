import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

import './network-detector.styles.scss'
export default (ComposedComponent) => {
  const NetworkDetector = ({ ...props }) => {
    const { t } = useTranslation()
    useEffect(() => {
      handleConnectionChange()
      window.addEventListener('online', handleConnectionChange)
      window.addEventListener('offline', handleConnectionChange)

      return () => {
        window.removeEventListener('online', handleConnectionChange)
        window.removeEventListener('offline', handleConnectionChange)
      }
    }, [])

    const handleConnectionChange = () => {
      const snackbarEle = document.getElementById('snackbarDiv')
      const condition = navigator.onLine ? 'online' : 'offline'
      if (condition === 'online') {
        const webPing = setInterval(() => {
          fetch('//google.com', {
            mode: 'no-cors',
          })
            .then(() => {
              snackbarEle.className = snackbarEle.className.replace('show', '')
              clearInterval(webPing)
            })
            .catch(() => {
              snackbarEle.className = 'show'
              clearInterval(webPing)
            })
        }, 2000)
        return
      }
      snackbarEle.className = 'show'
    }
    return (
      <>
        <div id="snackbarDiv">{t('NO_INTERNET.TITLE')}</div>
        <ComposedComponent {...props} />
      </>
    )
  }

  return NetworkDetector
}
