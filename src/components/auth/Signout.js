import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../actions'

class Signout extends Component {
  componentDidMount() {
    const { signout } = this.props
    signout()
  }

  render() {
    return (
      <div>K Bye</div>
    )
  }
} 

export default connect(null, actions)(Signout)