'use strict'

import React from 'react'
import SvgIcon from '../../components/svg-icon'

const FormSearch = () => (
  <div className='search'>
    <input
      className='form-control'
      type='search'
      placeholder='Busque por palavras chaves' />

    <button className='search-btn' type='submit' role='button'>
      <SvgIcon id='search' label='Search' />
    </button>
  </div>
)

export default FormSearch
