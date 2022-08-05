import React, { memo, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Categories from './Categories'
import Post from './Post'

import { connect } from 'react-redux'
import {
  fetchPosts,
  deletePost,
  fetchCategories,
  fetchPostsByAuthor,
  fetchPostsByCategory,
} from '../store/actions/index'

const Posts = memo(
  ({
    type,
    posts,
    categories,
    onFetchPosts,
    onFetchCategories,
    onFetchPostByAuthor,
    onFetchPostsByCategory,
  }) => {
    const { id } = useParams(Categories)
    const { authorId } = useParams(Post)

    useEffect(() => {
      onFetchCategories()
      onFetchPosts()
    }, [onFetchCategories, onFetchPosts])

    useEffect(() => {
      if (type === 'author') {
        onFetchPostByAuthor(authorId)
      } else if (type === 'category') {
        onFetchPostsByCategory(id)
      } else {
        onFetchPosts()
      }
    }, [
      authorId,
      id,
      onFetchPostByAuthor,
      onFetchPosts,
      onFetchPostsByCategory,
      type,
    ])

    return (
      <React.Fragment>
        <Categories categories={categories} />

        <div className='content'>
          <Post post={posts} />
        </div>
      </React.Fragment>
    )
  }
)

const mapStateToProps = (state) => {
  return {
    posts: state.posts.posts,
    categories: state.posts.categories,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchPosts: () => dispatch(fetchPosts()),
    onDeletePost: (postId) => dispatch(deletePost(postId)),
    onFetchCategories: () => dispatch(fetchCategories()),
    onFetchPostByAuthor: (authorId) => dispatch(fetchPostsByAuthor(authorId)),
    onFetchPostsByCategory: (categoryId) =>
      dispatch(fetchPostsByCategory(categoryId)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts)
