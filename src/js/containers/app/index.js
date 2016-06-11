'use strict'

import React, { Component } from 'react'
import MainHeader from './main-header'
import MainContent from '../main-content/index'
import MainFooter from './main-footer'

class App extends Component {
  render () {
    return (
      <div>
        <MainHeader />
        <MainContent />
        <MainFooter />
      </div>
    )
  }
}

export default App
