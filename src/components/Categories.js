import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Categories = ({ categories }) => {
  return (
    <ul className='sidebar'>
      {categories &&
        categories.map(({ id, title }) => {
          return (
            <li key={id}>
              <Link to={`/category/${id}`} key={id}>
                {title}
              </Link>
            </li>
          )
        })}

      <Link to='/'>
        <li>All Posts</li>
      </Link>
    </ul>
  )
}

Categories.propTypes = {
  title: PropTypes.string,
}

export default Categories
