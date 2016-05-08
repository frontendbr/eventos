'use strict'

import React from 'react'
import EventListItem from '../../components/event-list-item'
import Pagination from '../../components/pagination/index'

const Page = () => (
  <section className='page'>
    <header className='page-header'>
      <h3 className='title'>Próximos Eventos</h3>
    </header>

    <div className='page-wrap'>
    {Array.apply(null, { length: 5 }).map((event, index) => (
      <EventListItem key={index} />
    ))}
      <Pagination />
    </div>

  </section>
)

export default Page
