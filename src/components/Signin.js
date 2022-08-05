import React, { useState } from 'react'
import Input from './Input'
import { connect } from 'react-redux'
import { signIn } from '../store/actions/index'
import { useHistory, useLocation } from 'react-router-dom'

const Signin = ({ onSignUser, user, error }) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i
  const history = useHistory()
  const location = useLocation()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [submitted, setSubmitted] = useState(false)

  return (
    <div className='sign-in'>
      <h2>Signin</h2>
      <div className='signin-form'>
        <Input
          label='E-mail'
          type='text'
          hasError={false}
          value={email}
          onInput={(e) => setEmail(e.target.value)}
        />

        {submitted && !email && (
          <div style={{ color: 'red' }}>Email is required</div>
        )}
        <br />
        {submitted && !regex.test(email) && (
          <div style={{ color: 'red' }}>This is not a valid email format!</div>
        )}

        <Input
          label='Password'
          type='password'
          hasError={false}
          value={password}
          onInput={(e) => setPassword(e.target.value)}
        />
        {submitted && !password && (
          <div style={{ color: 'red' }}>Password is required</div>
        )}
        <button
          id='add-post-btn'
          onClick={() => {
            return (
              <React.Fragment>
                {!error ? onSignUser(email, password, history, location) : null}
                {!error ? setSubmitted(true) : null}
              </React.Fragment>
            )
          }}
        >
          Go!
        </button>
        <br />
        {error && (
          <div style={{ color: 'red' }}>Incorrect username/password</div>
        )}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.users.user,
    error: state.errors.error,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSignUser: (email, password, history, location) =>
      dispatch(signIn(email, password, history, location)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signin)
