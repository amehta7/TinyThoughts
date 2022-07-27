import React, { memo } from 'react'
// import PropTypes from "prop-types";
import moment from 'moment'

import { Link } from 'react-router-dom'

const Post = memo(({ post }) => {
  return (
    <React.Fragment>
      {post &&
        post.map(({ id, title, content, author, categories, timestamp }) => {
          return (
            <div className='post' key={id}>
              <div key={id}>
                <h1>{title}</h1>
                <h3>
                  by {author.name} | {categories.title} | Posted on{' '}
                  <span>
                    {moment(timestamp).format('dddd, MMMM Do YYYY, h:mm:ss a')}
                  </span>
                </h3>
                <p>{content}</p>
              </div>
            </div>
          )
        })}
    </React.Fragment>
  )
})

export default Post

// <Switch>
//         <Route path={`${path}/:author/:authorId`}>
//           <Posts type='author' />
//         </Route>
//       </Switch>
// {
//   ;`${url}/${author.name}/${authorId}`
// }
// key = { authorId }

// const { url } = useRouteMatch()
