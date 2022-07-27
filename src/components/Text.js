import React from 'react'
import PropTypes from 'prop-types'

const Text = ({ label, onUpdate, value, maxLength, hasError }) => {
  return (
    <div className={hasError ? 'text-box hasError' : 'text-box'}>
      <span className='label'>{label}</span>
      <textarea
        value={value}
        maxLength={maxLength}
        type='textarea'
        onChange={onUpdate}
      />
    </div>
  )
}

Text.propTypes = {
  type: PropTypes.string,
}

export default Text
