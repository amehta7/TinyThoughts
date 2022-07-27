import React, { useState, createContext } from 'react'

import { connect } from 'react-redux'

const AuthCtx = createContext()

const useAuthentication = () => {
  const [user, setUser] = useState(null)
  const [error, setError] = useState(null)

  const login = (email, password) =>
    doSignIn(email, password)
      .then((user) => {
        setUser(user)
        setError(null)
      })
      .catch((error) => setError(error))

  const logOut = () => {
    setUser(null)
    setError(null)
  }
  return {
    AuthCtx,
    AuthProvider: ({ children }) => (
      <AuthCtx.Provider value={{ error, user, login, logOut }}>
        {children}
      </AuthCtx.Provider>
    ),
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.users.user,
    error: state.errors.error,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSignUser: () => dispatch(signIn()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(useAuthentication)
