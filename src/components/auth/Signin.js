import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import { compose } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../../actions'

class Signin extends Component {
  onSubmit = formProps => {
    const { signin, history } = this.props

    signin(formProps, () => {
      history.push('/feature')
    })
  }

  render() {
    const { handleSubmit, errorMessage } = this.props

    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <fieldset>
          <label>Email</label>
          <Field
            name='email'
            type='text'
            component='input'
          />
        </fieldset>
        <fieldset>
          <label>Password</label>
          <Field
            name='password'
            type='password'
            component='input'
          />
        </fieldset>
        <div>{errorMessage}</div>
        <button>Sign In</button>
      </form>
    )
  }
}

const mapStateToProps = ({ auth: { errorMessage } }) => ({ errorMessage })

export default compose( connect(mapStateToProps, actions), reduxForm({ form: 'signin' }) )(Signin)