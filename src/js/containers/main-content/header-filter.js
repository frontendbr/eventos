'use strict'

import React, { PropTypes } from 'react'
import FormSelect from '../../components/form-select'
import FormSearch from './form-search'

const HeaderFilter = ({
  monthFilter,
  stateFilter,
  searchField,
  handleChangeMonth,
  handleChangeState,
  handleChangeText
}) => (
  <nav className='filter'>
    <FormSelect
      key='months'
      {...monthFilter}
      handleChange={handleChangeMonth} />

    <FormSelect
      key='states'
      {...stateFilter}
      handleChange={handleChangeState} />

    <FormSearch
      searchField={searchField}
      handleChangeText={handleChangeText} />
  </nav>
)

HeaderFilter.propTypes = {
  monthFilter: PropTypes.object.isRequired,
  stateFilter: PropTypes.object.isRequired,
  searchField: PropTypes.string.isRequired,
  handleChangeMonth: PropTypes.func.isRequired,
  handleChangeState: PropTypes.func.isRequired,
  handleChangeText: PropTypes.func.isRequired
}

export default HeaderFilter
