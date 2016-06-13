'use strict'

import React from 'react'
import Header from './header'
import Page from './page'
import Aside from './aside'

const MainContent = () => (
  <main className='main' role='main'>
    <Header />
    <Page />
    <Aside />
  </main>

)

export default MainContent
