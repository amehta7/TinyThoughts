import React from 'react'
import PropTypes from 'prop-types'

const Select = ({ label, value, onSet, hasError }) => {
  return (
    <div className={hasError ? 'select-list hasError' : 'select-list'}>
      <span className='label'>{label}</span>
      <select value={value} onChange={onSet} type='text'>
        <option id='1'>JavaScript</option>
        <option id='2'>React</option>
        <option id='3'>Node.js</option>
        <option id='4'>React Router</option>
        <option id='5'>Redux</option>
        <option id='6'>GraphQL</option>
        <option id='7'>HTML5</option>
        <option id='8'>CSS3</option>
        <option id='9'>Java</option>
        <option id='10'>Python</option>
        <option id='11'>Movies</option>
      </select>
    </div>
  )
}

Select.propTypes = {
  type: PropTypes.string,
}

export default Select
