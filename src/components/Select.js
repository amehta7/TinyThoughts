import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const Select = ({ categories, label, value, onSet, hasError }) => {
  return (
    <div className={hasError ? 'select-list hasError' : 'select-list'}>
      <span className='label'>{label}</span>
      <select value={value} onChange={onSet}>
        {categories.map(({ id, title }) => {
          return (
            <option key={id} id={id}>
              {title}
            </option>
          )
        })}
      </select>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    categories: state.posts.categories,
  }
}

Select.propTypes = {
  type: PropTypes.string,
}

export default connect(mapStateToProps, null)(Select)
