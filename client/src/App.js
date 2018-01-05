import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'
import Sample from './Components/Sample'
import './App.css'

class App extends Component {
  render () {
    return (
      <ConnectedRouter history={this.props.history}>
        <div>
          <Route exact path='/' component={Sample} />
        </div>
      </ConnectedRouter>
    )
  }
}

export default App
