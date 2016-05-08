'use strict'

import React from 'react'
import FormSelect from '../../components/form-select'
import SvgIcon from '../../components/svg-icon'

const HeaderFilter = () => (
  <nav className='filter'>
    <FormSelect
      key='select-date'
      icon={{
        id: 'date',
        label: 'Data'
      }}
      label='Escolha um mês'
      options={[{
        text: 'Escolha um mês',
        value: ''
      }, {
        text: 'Janeiro',
        value: 'Janeiro'
      }, {
        text: 'Fevereiro',
        value: 'Fevereiro'
      }, {
        text: 'Março',
        value: 'Março'
      }]}
    />

    <FormSelect
      key='select-location'
      icon={{
        id: 'location',
        label: 'Local'
      }}
      label='Escolha um estado'
      options={[{
        text: 'São Paulo',
        value: 'São Paulo'
      }, {
        text: 'Acre',
        value: 'Acre'
      }, {
        text: 'Paraná',
        value: 'Paraná'
      }]}
    />

    <div className='search'>
      <input className='form-control' type='search' placeholder='Busque por palavras chaves' />
      <button className='search-btn' type='submit' role='button'>
        <SvgIcon id='search' label='Search' />
      </button>
    </div>
  </nav>
)

export default HeaderFilter
