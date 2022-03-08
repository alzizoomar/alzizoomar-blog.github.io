import { useSnackbar } from 'notistack'

let useSnackbarRef = null

export const SnackbarUtilsConfigurator = () => {
  useSnackbarRef = useSnackbar()

  return null
}
export const snackActions = {
  success(msg, options = {}) {
    this.toast(msg, { ...options, variant: 'success' })
  },
  warning(msg, options = {}) {
    this.toast(msg, { ...options, variant: 'warning' })
  },
  info(msg, options = {}) {
    this.toast(msg, { ...options, variant: 'info' })
  },
  error(msg, options = {}) {
    this.toast(msg, { ...options, variant: 'error' })
  },
  toast(msg, options = {}) {
    const finalOptions = {
      variant: 'default',
      ...options,
    }
    useSnackbarRef.enqueueSnackbar(msg, { ...finalOptions })
  },
}
