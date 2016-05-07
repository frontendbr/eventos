'use strict'

import React from 'react'
import HeaderBanner from './header-banner'
import HeaderFilter from './header-filter'

const Header = () => (
  <header className='wellness'>
    <h1 className='title'>
      Encontre eventos de Front-End em todo o Brasil
    </h1>

    <HeaderBanner />
    <HeaderFilter />
  </header>
)

export default Header
