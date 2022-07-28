import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const Protected = ({ user, children, ...rest }) => (
  <Route
    {...rest}
    render={({ location }) =>
      user ? (
        children
      ) : (
        <Redirect to={{ pathname: '/signin', state: { from: location } }} />
      )
    }
  />
)

export default Protected
