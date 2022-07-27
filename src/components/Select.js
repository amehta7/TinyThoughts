import React from 'react'
import PropTypes from 'prop-types'

const Select = ({ label, value, onSet, hasError }) => {
  return (
    <div className={hasError ? 'select-list hasError' : 'select-list'}>
      <span className='label'>{label}</span>
      <select defaultValue='Select' value={value} onChange={onSet} type='text'>
        <option>UI/UX</option>
        <option>JavaScript</option>
        <option>PHP</option>
        <option>Database</option>
        <option>Node.js</option>
      </select>
    </div>
  )
}

Select.propTypes = {
  type: PropTypes.string,
}

export default Select
