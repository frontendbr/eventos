'use strict'

import React from 'react'

const Pagination = () => (
  <nav className='pagination'>
    <button className='pagination-item'>
      <svg className='icon' aria-hidden='true' aria-label='Anterior'>
        <use xlinkHref='svg/icons.svg#arrow-left' />
      </svg>
    </button>
    <button className='pagination-item active'>1</button>
    <button className='pagination-item'>2</button>
    <button className='pagination-item'>3</button>
    <button className='pagination-item'>4</button>
    <button className='pagination-item'>5</button>
    <button className='pagination-item'>
      <svg className='icon' aria-hidden='true' aria-label='Próximo'>
        <use xlinkHref='svg/icons.svg#arrow-right' />
      </svg>
    </button>
  </nav>
)

export default Pagination
