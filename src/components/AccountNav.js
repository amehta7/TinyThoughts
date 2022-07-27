import React, { memo } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const AccountNav = memo(({ user }) => {
  return (
    <div className='account-nav'>
      {' '}
      {!user ? (
        <ul>
          <li>
            <Link to='/signin'>Signin</Link>
          </li>
          <li>
            {' '}
            <Link to='/signup'>Signup</Link>
          </li>
        </ul>
      ) : (
        <React.Fragment>
          <h2>{user.name}</h2>
          <ul>
            <li>
              <Link to='/'>Signout</Link>
            </li>
          </ul>
        </React.Fragment>
      )}
    </div>
  )
})

const mapStateToProps = (state) => {
  return {
    user: state.users.user,
  }
}

export default connect(mapStateToProps, null)(AccountNav)

// <h4>user_name</h4>
// <ul>
//   <li>Signout</li>
// </ul>
