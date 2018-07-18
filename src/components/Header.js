import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Header extends Component {
  renderLinks = () => {
    const { authenticated } = this.props

    if (authenticated) {
      return (
        <div>
          <Link to='/feature'>Feature</Link>
          <Link to='/signout'>Sign Out</Link>
        </div>
      )
    } 
    
    if (!authenticated) {
      return (
        <div>
          <Link to='/signup'>Sign Up</Link>
          <Link to='/signin'>Sign In</Link>
        </div>
      )
    }
  }

  render() {
    return (
      <div>
        <Link to='/'>Redux Auth</Link>
        {this.renderLinks()}
      </div>
    )
  }
}

const mapStateToProps = ({ auth: { authenticated } }) => ({ authenticated })

export default connect(mapStateToProps)(Header)