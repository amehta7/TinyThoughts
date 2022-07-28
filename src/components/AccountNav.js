import React, { memo } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../store/actions/index'

const AccountNav = memo(({ user, onSignOut }) => {
  return (
    <React.Fragment>
      {!user ? (
        <div className='account-nav'>
          <ul>
            <li>
              <Link to='/signin'>Signin</Link>
            </li>
            <li>
              {' '}
              <Link to='/signup'>Signup</Link>
            </li>
          </ul>
        </div>
      ) : (
        <div className='account-nav'>
          <h4>{user.name}</h4>
          <ul>
            <li>
              <Link to='/' onClick={() => onSignOut()}>
                Signout
              </Link>
            </li>
          </ul>
        </div>
      )}
    </React.Fragment>
  )
})

const mapStateToProps = (state) => {
  return {
    user: state.users.user,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSignOut: () => dispatch(signOut()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountNav)
