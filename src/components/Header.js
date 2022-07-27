import React from 'react'
import AccountNav from './AccountNav'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
      <div className='app-title'>TinyThoughts</div>
      <div className='app-nav'>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/add'>New Post</Link>
          </li>
        </ul>
      </div>

      <AccountNav />
    </div>
  )
}

export default Header
