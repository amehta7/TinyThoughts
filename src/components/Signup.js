import React from 'react'
import Input from './Input'

const Signup = () => {
  return (
    <div className='sign-up'>
      <h2>Signup</h2>
      <div className='signup-form'>
        <Input label='Name' type='text' hasError={false} />
        <Input label='E-mail' type='text' hasError={false} />
        <Input label='Password' type='password' hasError={false} />
        <Input label='Retype Password' type='password' hasError={false} />
        <button id='add-post-btn'>Done!</button>
      </div>
    </div>
  )
}

export default Signup
