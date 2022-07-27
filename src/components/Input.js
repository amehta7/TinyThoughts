import React from 'react'
import PropTypes from 'prop-types'

const Input = ({ label, type, onInput, value = '', hasError }) => {
  return (
    <div className={hasError ? 'input-box hasError' : 'input-box'}>
      <span className='label'>{label}</span>
      <input type={type} value={value} onChange={onInput} />
    </div>
  )
}

Input.propTypes = {
  type: PropTypes.string,
}

export default Input
