'use strict'

import React from 'react'
import SvgIcon from '../../components/svg-icon'

const HeaderFilter = () => (
  <nav className='filter'>
      <div className='form-select'>
          <SvgIcon id='date' label='Data' />
          <label className='sr-only'>Escolha um mês</label>
          <select>
              <option>Escolha um mês</option>
              <option>Janeiro</option>
              <option>Fevereiro</option>
              <option>Março</option>
          </select>
      </div>

      <div className='form-select'>
          <SvgIcon id='location' label='Local' />
          <label className='sr-only'>Escolha um estado</label>
          <select>
              <option>Escolha um estado</option>
              <option>São Paulo</option>
              <option>Acre</option>
              <option>Paraná</option>
          </select>
      </div>

      <div className='search'>
          <input className='form-control' type='search' placeholder='Busque por palavras chaves' />
          <button className='search-btn' type='submit' role='button'>
            <SvgIcon id='search' label='Search' />
          </button>
      </div>
  </nav>
)

export default HeaderFilter
