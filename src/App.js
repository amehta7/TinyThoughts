import React from 'react'
import Header from './components/Header'
import Posts from './components/Posts'
import AddPost from './components/AddPost'
import Signin from './components/Signin'
import Signup from './components/Signup'
import NoMatch from './components/NoMatch'
import Protected from './components/Protected'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <div className='app'>
        <Header />
        <div className='main'>
          <Switch>
            <Route exact path='/'>
              <Posts />
            </Route>

            <Protected path='/add'>
              <AddPost />
            </Protected>
            <Route path='/signin'>
              <Signin />
            </Route>

            <Route path='/signup'>
              <Signup />
            </Route>

            <Route path='*'>
              <NoMatch />
            </Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App

// <Route path='/category/:categoryId'>
//               <Posts type='category' />
//             </Route>

//             <Route path='/author/:authorId'>
//               <Posts type='author' />
//             </Route>
