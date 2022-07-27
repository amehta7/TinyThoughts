const initialState = {
  error: false,
}

const errors = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_POSTS_FAILURE': {
      return {
        error: true,
      }
    }
    case 'GET_CATEGORIES_FAILURE': {
      return {
        error: true,
      }
    }
    case 'SIGNIN_FAILURE': {
      return {
        error: true,
      }
    }
    case 'SIGNUP_FAILURE': {
      return {
        error: true,
      }
    }
    case 'INIT_FAILURE': {
      return {
        error: true,
      }
    }
    case 'ADD_POST_FAILURE': {
      return {
        error: true,
      }
    }
    case 'DELETE_POST_FAILURE': {
      return {
        error: true,
      }
    }
    case 'GET_POSTS_SUCCESS': {
      return {
        error: false,
      }
    }
    case 'GET_CATEGORIES_SUCCESS': {
      return {
        error: false,
      }
    }
    case 'SIGNIN_SUCCESS': {
      return {
        error: false,
      }
    }
    case 'INIT_SUCCESS': {
      return {
        error: false,
      }
    }
    case 'ADD_POST_SUCCESS': {
      return {
        error: false,
      }
    }
    case 'DELETE_POST_SUCCESS': {
      return {
        error: false,
      }
    }
    case 'RESET_ERROR': {
      return {
        error: false,
      }
    }
    default: {
      return state
    }
  }
}

export default errors
