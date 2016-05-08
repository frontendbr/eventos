'use strict'

import React from 'react'
import FormSelect from '../../components/form-select'
import FormSearch from './form-search'

const filterFields = [{
  icon: { id: 'date', label: 'Data' },
  label: 'Escolha um mês',
  options: [
    { text: 'Escolha um mês', value: '' },
    { text: 'Janeiro', value: 'Janeiro' },
    { text: 'Fevereiro', value: 'Fevereiro' },
    { text: 'Março', value: 'Março' }
  ]
}, {
  icon: { id: 'location', label: 'Local' },
  label: 'Escolha um estado',
  options: [
    { text: 'Escolha um estado', value: '' },
    { text: 'São Paulo', value: 'São Paulo' },
    { text: 'Acre', value: 'Acre' },
    { text: 'Paraná', value: 'Paraná' }
  ]
}]

const HeaderFilter = () => (
  <nav className='filter'>
    {filterFields.map((props, index) => (
      <FormSelect key={index} {...props} />
    ))}

    <FormSearch />
  </nav>
)

export default HeaderFilter
