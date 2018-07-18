import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reduxThunk from 'redux-thunk'
 
import reducers from './reducers';
import App from './components/App'
import Welcome from './components/Welcome'
import Signup from './components/auth/Signup'
import Signout from './components/auth/Signout'
import Feature from './components/Feature'

const store = createStore(
  reducers, 
  { auth: { authenticated: localStorage.getItem('token') }},
  applyMiddleware(reduxThunk)
)

const AuthApp = (
  <Provider store={store}>
    <BrowserRouter>
      <App>
        <Route exact path='/' component={Welcome}/>
        <Route path='/signup' component={Signup}/>
        <Route path='/signout' component={Signout}/>
        <Route path='/feature' component={Feature}/>
      </App>
    </BrowserRouter>
  </Provider>
)
 
ReactDOM.render(AuthApp, document.getElementById('root'))
