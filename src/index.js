import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reduxThunk from 'redux-thunk'
 
import App from './components/App'
import Welcome from './components/Welcome'
import Signup from './components/auth/Signup'
import reducers from './reducers';

const store = createStore(
  reducers, 
  {},
  applyMiddleware(reduxThunk)
)

const AuthApp = (
  <Provider store={store}>
    <BrowserRouter>
      <App>
        <Route exact path='/' component={Welcome} />
        <Route path='/signup' component={Signup} />
      </App>
    </BrowserRouter>
  </Provider>
)
 
ReactDOM.render(AuthApp, document.getElementById('root'))
