import {
  doSignIn,
  doSignOut,
  initUser,
  getAllPosts,
  getPostsByAuthor,
  getPostsByCategory,
  getCategories,
  addPostAndFetch,
  deletePostAndFetch,
  doSignUp,
} from '../../services'

export const signIn = (email, password, history, location) => (dispatch) =>
  doSignIn(email, password)
    .then((user) => {
      dispatch({ type: 'SIGNIN_SUCCESS', user })
      const { from } = (location && location.state) || {
        from: { pathname: '/' },
      }
      history.replace(from)
    })
    .catch(() => {
      dispatch({ type: 'SIGNIN_FAILURE' })
    })

export const signUp = (name, email, password, history) => (dispatch) =>
  doSignUp(name, email, password)
    .then((user) => {
      dispatch({ type: 'SIGNUP_SUCCESS', user })
      history.push('/')
    })
    .catch(() => dispatch({ type: 'SIGNUP_FAILURE' }))

export const signOut = () => (dispatch) =>
  doSignOut()
    .then(() => dispatch({ type: 'SIGNOUT_SUCCESS' }))
    .catch(() => dispatch({ type: 'SIGNOUT_FAILURE' }))

export const initUserState = () => (dispatch) =>
  initUser()
    .then((user) => dispatch({ type: 'INIT_SUCCESS', user }))
    .catch(() => {
      dispatch({ type: 'INIT_FAILURE' })
    })

export const fetchPosts = () => (dispatch) =>
  getAllPosts()
    .then((posts) => {
      dispatch({ type: 'GET_POSTS_SUCCESS', posts })
    })
    .catch(() =>
      dispatch({
        type: 'GET_POSTS_FAILURE',
      })
    )

export const fetchPostsByAuthor = (authorId) => (dispatch) =>
  getPostsByAuthor(authorId)
    .then((posts) =>
      dispatch({
        type: 'GET_POSTS_SUCCESS',
        posts,
      })
    )
    .catch(() =>
      dispatch({
        type: 'GET_POSTS_FAILURE',
      })
    )

export const fetchPostsByCategory = (categoryId) => (dispatch) =>
  getPostsByCategory(categoryId)
    .then((posts) =>
      dispatch({
        type: 'GET_POSTS_SUCCESS',
        posts,
      })
    )
    .catch(() =>
      dispatch({
        type: 'GET_POSTS_FAILURE',
      })
    )

export const fetchCategories = () => (dispatch) =>
  getCategories()
    .then((categories) =>
      dispatch({ type: 'GET_CATEGORIES_SUCCESS', categories })
    )
    .catch(() =>
      dispatch({
        type: 'GET_CATEGORIES_FAILURE',
      })
    )

export const addPost = (post, history) => (dispatch) =>
  addPostAndFetch(post)
    .then((post) => {
      console.log(post)
      dispatch({ type: 'ADD_POST_SUCCESS', post })
      history.push('/')
    })
    .catch(() => {
      dispatch({
        type: 'ADD_POST_FAILURE',
      })
      dispatch(signOut())
    })

export const deletePost = (postId) => (dispatch) =>
  deletePostAndFetch(postId)
    .then((posts) => dispatch({ type: 'DELETE_POSTS_SUCCESS', posts }))
    .catch(() => {
      dispatch({
        type: 'DELETE_POST_FAILURE',
      })
      dispatch(signOut())
    })
