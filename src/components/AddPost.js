import React, { memo } from 'react'
import Input from './Input'
import Text from './Text'
import Select from './Select'
import { connect } from 'react-redux'
import { addPost } from '../store/actions/index'

const AddPost = memo(() => {
  return (
    <div className='add-post'>
      <form>
        <h2>New Post</h2>
        <div className='add-post-form'>
          <Input label='Title' type='text' hasError={false} />
          <Text
            label='Type in your thoughts in 200 words or less'
            type='text'
            hasError={false}
            maxLength={200}
          />
          <div className='char-count'>of 200 characters</div>
          <Select label='Select a category' type='text' hasError={false} />
          <button id='add-post-btn'>+ Add</button>
        </div>
      </form>
    </div>
  )
})

const mapStateToProps = (state) => {
  return {
    posts: state.posts.posts,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAddPost: (post) => dispatch(addPost(post)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddPost)
