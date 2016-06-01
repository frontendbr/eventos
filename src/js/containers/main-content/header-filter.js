'use strict'

import React, { PropTypes } from 'react'
import FormSelect from '../../components/form-select'
import FormSearch from './form-search'

const HeaderFilter = ({ monthFilter, stateFilter, searchField }) => (
  <nav className='filter'>
    <FormSelect key='months' {...monthFilter} />
    <FormSelect key='states' {...stateFilter} />

    <FormSearch />
  </nav>
)

HeaderFilter.propTypes = {
  monthFilter: PropTypes.object.isRequired,
  stateFilter: PropTypes.object.isRequired,
  searchField: PropTypes.string.isRequired
}

export default HeaderFilter
