import React, { useState } from 'react'
import Input from './Input'
import { connect } from 'react-redux'
import { signUp } from '../store/actions/index'
import { useHistory } from 'react-router-dom'

const Signup = ({ error, onSignUp }) => {
  const history = useHistory()
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rePassword, setRePassword] = useState('')
  const [submitted, setSubmitted] = useState(false)
  return (
    <div className='sign-up'>
      <h2>Signup</h2>
      <div className='signup-form'>
        <Input
          label='Name'
          type='text'
          hasError={false}
          value={name}
          onInput={(e) => setName(e.target.value)}
        />
        {submitted && !name && (
          <div style={{ color: 'red' }}>Name is required</div>
        )}
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
        <br />
        {submitted && password.length < 4 && (
          <div style={{ color: 'red' }}>
            Password must be more than 4 characters
          </div>
        )}
        <br />
        {submitted && password.length > 10 && (
          <div style={{ color: 'red' }}>
            Password cannot exceed more than 10 characters
          </div>
        )}
        <Input
          label='Retype Password'
          type='password'
          hasError={false}
          value={rePassword}
          onInput={(e) => setRePassword(e.target.value)}
        />
        {submitted && !rePassword && (
          <div style={{ color: 'red' }}>Retype Password is required</div>
        )}
        <br />
        {submitted && password !== rePassword && (
          <div style={{ color: 'red' }}>
            Password and RePassword are not match
          </div>
        )}

        <button
          id='add-post-btn'
          onClick={() => {
            return (
              <React.Fragment>
                {!error &&
                  name &&
                  email &&
                  password &&
                  rePassword &&
                  password === rePassword &&
                  onSignUp(name, email, password, history)}
                {!error ? setSubmitted(true) : null}
              </React.Fragment>
            )
          }}
        >
          Done!
        </button>
        <br />
        <div>
          {error && <div style={{ color: 'red' }}>'Error in form fill-up'</div>}
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    error: state.errors.error,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSignUp: (name, email, password, history) =>
      dispatch(signUp(name, email, password, history)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup)
