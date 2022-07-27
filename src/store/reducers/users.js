const users = (state = {}, action) => {
  switch (action.type) {
    case 'SIGNIN_SUCCESS': {
      return {
        user: action.user,
      }
    }
    case 'SIGNUP_SUCCESS': {
      return {
        user: action.user,
      }
    }
    case 'INIT_SUCCESS': {
      return {
        user: action.user,
      }
    }
    case 'INIT_FAILURE': {
      return {}
    }
    case 'SIGNUP_FAILURE': {
      return {}
    }
    case 'SIGNOUT_SUCCESS': {
      return {}
    }
    default: {
      return state
    }
  }
}

export default users
