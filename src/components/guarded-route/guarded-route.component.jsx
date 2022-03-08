import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'

const GuardedRoute = ({ component: Component, auth, ...otherProps }) => (
  <Route
    {...otherProps}
    render={(props) => (auth ? <Component {...props} /> : <Redirect to="/" />)}
  />
)

GuardedRoute.propTypes = {
  component: PropTypes.elementType.isRequired,
  auth: PropTypes.bool.isRequired,
}

export default GuardedRoute
