import React, { memo } from 'react'

import moment from 'moment'
import DeletePostButton from './DeletePostButton'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { deletePost } from '../store/actions/index'

const Post = memo(({ post, user, onDeletePost }) => {
  return (
    <React.Fragment>
      {post &&
        post.map(
          ({ id, title, content, author, categories, timestamp, authorId }) => {
            return (
              <div className='post' key={id}>
                <div>
                  <h1>{title}</h1>
                  {user ? (
                    <DeletePostButton
                      onConfirm={() => {
                        onDeletePost(id)
                      }}
                    />
                  ) : null}
                  <h3>
                    by{' '}
                    <Link
                      to={`/author/${authorId}`}
                      key={authorId}
                      style={{ color: 'rgb(89, 97, 206)' }}
                    >
                      {author.name} | {categories.title}
                    </Link>{' '}
                    | Posted on{' '}
                    <span>
                      {moment(timestamp).format(
                        'dddd, MMMM Do YYYY, h:mm:ss a'
                      )}
                    </span>
                  </h3>
                  <p>{content}</p>
                </div>
              </div>
            )
          }
        )}
    </React.Fragment>
  )
})

const mapStateToProps = (state) => {
  return {
    posts: state.posts.posts,
    categories: state.posts.categories,
    user: state.users.user,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onDeletePost: (postId) => dispatch(deletePost(postId)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)
