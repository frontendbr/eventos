'use strict'

import React, { PropTypes } from 'react'
import SvgIcon from '../../components/svg-icon'

const FormSearch = ({ searchField, handleChangeText }) => (
  <div className='search'>
    <input
      className='form-control'
      type='search'
      placeholder='Busque por palavras chaves'
      value={searchField}
      onChange={handleChangeText} />

    <button className='search-btn' type='submit' role='button'>
      <SvgIcon id='search' label='Search' />
    </button>
  </div>
)

FormSearch.propTypes = {
  searchField: PropTypes.string.isRequired,
  handleChangeText: PropTypes.func.isRequired
}

export default FormSearch
