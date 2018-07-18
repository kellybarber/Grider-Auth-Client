import axios from 'axios'
import { AUTH_USER, AUTH_ERROR } from './types'

export const signup = (formProps, callback) => async dispatch => {
  try {
    const response = await axios.post('http://localhost:3090/signup', formProps)
    dispatch({ 
      type: AUTH_USER, 
      payload: response.data.token 
    })
    localStorage.setItem('token', response.data.token)
    callback()
  } catch ({ response }) {
    const { error } = response.data
    dispatch({ 
      type: AUTH_ERROR, 
      payload: error 
    })
  }
}

export const signout = () => {
  localStorage.clearItem('token')

  return {
    type: AUTH_USER,
    payload: ''
  }
}