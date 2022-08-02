import React, { memo, useState } from 'react'
import Input from './Input'
import Text from './Text'
import Select from './Select'
import { connect } from 'react-redux'
import { addPost } from '../store/actions/index'
import { useHistory } from 'react-router-dom'

const AddPost = memo(({ onAddPost, user }) => {
  const history = useHistory()
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [select, setSelect] = useState()
  const [selId, setSelId] = useState()
  const handleChange = (event) => {
    setSelect(event.target.value)

    const index = event.target.selectedIndex
    const optionElement = event.target.childNodes[index]
    const optionElementId = optionElement.getAttribute('id')
    setSelId(optionElementId)

    console.log(optionElementId)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onAddPost(
      {
        authorId: user.id,
        title: title,
        categoriesId: selId,
        content: content,
      },
      history
    )
  }
  return (
    <div className='add-post'>
      <form onSubmit={handleSubmit}>
        <h2>New Post</h2>
        <div className='add-post-form'>
          <Input
            label='Title'
            type='text'
            value={title}
            onInput={(e) => setTitle(e.target.value)}
          />
          <Text
            label='Type in your thoughts in 200 words or less'
            type='text'
            maxLength={200}
            value={content}
            onUpdate={(e) =>
              setContent(e.target.value.replace(/(?:\\r)/g, '\\n\\n'))
            }
          />
          <div className='char-count'>{content.length} of 200 Characters</div>
          <Select
            label='Select a category'
            value={select}
            onSet={handleChange}
          />
          <button id='add-post-btn'>+ Add</button>
        </div>
      </form>
    </div>
  )
})

const mapStateToProps = (state) => {
  return {
    user: state.users.user,
    categories: state.posts.categories,
    error: state.errors.error,
    posts: state.posts.posts,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAddPost: (post, history) => dispatch(addPost(post, history)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddPost)
