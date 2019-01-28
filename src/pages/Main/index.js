import React, { Component } from 'react'
import { connect } from 'react-redux'
import Header from 'components/Header'
import Container from 'components/Container'

import './index.styl'

class AppComponent extends Component {
  render () {
    return <div className='wrap-container'>
      <Header />
      <Container router={this.props.router} />
    </div>
  }
}

// const mapStateToProps = (state) => {
//   return state
// }

const App = connect()(AppComponent)

export default App
