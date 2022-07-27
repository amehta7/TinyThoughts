import React, { memo, useEffect } from 'react'

import Categories from './Categories'
import Post from './Post'

import { connect } from 'react-redux'
import {
  fetchPosts,
  fetchCategories,
  fetchPostsByAuthor,
  fetchPostsByCategory,
} from '../store/actions/index'

const Posts = memo((props, type) => {
  useEffect(() => {
    props.onFetchPosts()
    props.onFetchCategories()
  }, [props])

  return (
    <React.Fragment>
      <Categories categories={props.categories} />

      <div className='content'>
        <Post post={props.posts} />
      </div>
    </React.Fragment>
  )
})

const mapStateToProps = (state) => {
  return {
    posts: state.posts.posts,
    categories: state.posts.categories,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchPosts: () => dispatch(fetchPosts()),
    onFetchCategories: () => dispatch(fetchCategories()),
    onFetchPostByAuthor: (authorId) => dispatch(fetchPostsByAuthor(authorId)),
    onFetchPostsByCategory: (categoryId) =>
      dispatch(fetchPostsByCategory(categoryId)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts)

// {props.categories &&
//   props.categories.map(({ id, title }) => {
//     return (
//       <Categories
//         key={id}
//         title={title}
//         onClickHandler={() => {
//           props.onFetchPostsByCategory(id)
//         }}
//       />
//     )
//   })}

//  useEffect(() => {
//    if (type === 'author') {
//      props.onFetchPostByAuthor(authorId)
//    } else if (type === 'category') {
//      props.onFetchCategories()
//    }
//  }, [authorId, props, type])

// const { authorId } = useParams()
