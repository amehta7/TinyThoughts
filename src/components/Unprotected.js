import React, { memo } from 'react'
import { Route, Redirect } from 'react-router-dom'

const Unprotected = memo(({ user, children, ...rest }) => (
  <Route
    {...rest}
    render={() => (!user ? children : <Redirect to={{ pathname: '/' }} />)}
  />
))

export default Unprotected
