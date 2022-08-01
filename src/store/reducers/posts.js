import { v4 as uuid } from 'uuid'

const initialState = {
  posts: [],
  categories: [],
}

const posts = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_POSTS_SUCCESS': {
      return {
        ...state,
        posts: action.posts,
      }
    }

    case 'DELETE_POSTS_SUCCESS': {
      return {
        posts: [state.posts.filter((post) => post.id !== action.id)],
        ...state,
      }
    }
    case 'GET_CATEGORIES_SUCCESS': {
      return {
        ...state,
        categories: action.categories,
      }
    }
    case 'ADD_POST_SUCCESS': {
      let newPost = {
        id: uuid(),
        authorId: action.posts.authorId,
        title: action.posts.title,
        categoriesId: action.posts.categoriesId,
        content: action.posts.content,
        timestamp: new Date(),
      }
      return {
        ...state,
        posts: [newPost, ...state.posts],
      }
    }
    default: {
      return state
    }
  }
}

export default posts

// id: uuid(),
