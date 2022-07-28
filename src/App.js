import React, { useEffect } from 'react'
import Header from './components/Header'
import Posts from './components/Posts'
import AddPost from './components/AddPost'
import Signin from './components/Signin'
import Signup from './components/Signup'
import NoMatch from './components/NoMatch'
import Protected from './components/Protected'
import Unprotected from './components/Unprotected'
import { initUserState } from './store/actions/index'
import { connect } from 'react-redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

const App = ({ user, onInitUserState }) => {
  useEffect(() => {
    onInitUserState()
  }, [onInitUserState])
  return (
    <BrowserRouter>
      <div className='app'>
        <Header />
        <div className='main'>
          <Switch>
            <Route exact path='/'>
              <Posts />
            </Route>
            <Route path='/category/:categoryId'>
              <Posts type='category' />
            </Route>

            <Route path='/author/:authorId'>
              <Posts type='author' />
            </Route>
            <Protected user={user} path='/add'>
              <AddPost />
            </Protected>
            <Unprotected user={user} path='/signin'>
              <Signin />
            </Unprotected>
            <Unprotected user={user} path='/signup'>
              <Signup />
            </Unprotected>
            <Route path='*'>
              <NoMatch />
            </Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.users.user,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onInitUserState: () => dispatch(initUserState()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
