'use strict'

import React from 'react'
import EventListItem from '../../components/event-list-item'
import Pagination from '../../components/pagination/index'

const events = [{
  title: 'Conferência CSS Brasil',
  image: 'http://www.conferenciacssbrasil.com.br/build/img/css-brasil.png',
  innerLink: 'inner.html',
  link: 'http://www.conferenciacssbrasil.com.br/',
  date: {
    day: 20,
    month: 'Maio',
    year: 2016
  },
  price: 'R$ 120,00',
  location: 'Maksound Plaza, São Paulo - SP',
  locationUrl: 'https://www.google.com.br/maps?q=maksoud+plaza&um=1&ie=UTF-8&sa=X&ved=0ahUKEwinuq_pm4rMAhXKkZAKHfMfBgoQ_AUICCgC',
  shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti vero assumenda aliquid voluptatibus quos vitae ratione aut maiores quo odio.'
}]

const Page = () => (
  <section className='page'>
    <header className='page-header'>
      <h3 className='title'>Próximos Eventos</h3>
    </header>

    <div className='page-wrap'>
      {events.map((props, index) => (
        <EventListItem key={index} {...props} />
      ))}
      <Pagination />
    </div>

  </section>
)

export default Page
