import React, { Component } from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Sider from 'components/Sider'

import './index.styl'

export default class extends Component {
  render () {
    return <div className='main-container'>
      <BrowserRouter>
        <div className='router-container'>
          <Sider router={this.props.router} />
          <div className='content-container'>
            <Switch>
              {
                this.props.router.map((item, i) =>
                  <Route key={i} exact={item.exact} path={item.path} component={item.component} />)
              }
              <Redirect to='/' />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </div>
  }
}
