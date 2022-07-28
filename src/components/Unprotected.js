import React, { memo } from 'react'
import { Route, Redirect } from 'react-router-dom'

const Unprotected = memo(({ user, children, ...rest }) => (
  <Route
    {...rest}
    render={({ location }) =>
      !user ? (
        children
      ) : (
        <Redirect to={{ pathname: '/', state: { from: location } }} />
      )
    }
  />
))

export default Unprotected
