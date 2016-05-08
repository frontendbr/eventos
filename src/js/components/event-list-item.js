'use strict'

import React from 'react'
import LazyImg from './lazy-img'

const EventListItem = () => (
  <article className='event'>
    <a className='event-media' href='inner.html' title='Ver evento'>
      <LazyImg src='http://www.conferenciacssbrasil.com.br/build/img/css-brasil.png' alt='Conferência CSS Brasil' />
    </a>
    <div className='event-main'>
      <a className='content' href='inner.html' title='Ver evento'>
        <h2>Conferência CSS Brasil</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti vero assumenda aliquid voluptatibus quos vitae ratione aut maiores quo odio.</p>
      </a>
      <a className='btn-link' href='http://www.conferenciacssbrasil.com.br/' target='_blank' title='Visitar site oficial'>
        <svg className='icon' aria-hidden='true' aria-label='Link'><use xlinkHref='svg/icons.svg#link' /></svg>
        conferenciacssbrasil.com.br
      </a>
      <ul className='event-list'>
        <li className='event-list--item'>
          <svg className='icon' aria-hidden='true' aria-label='Data'><use xlinkHref='svg/icons.svg#date' /></svg>
          19/03/2016
        </li>
        <li className='event-list--item'>
          <svg className='icon' aria-hidden='true' aria-label='Preço'><use xlinkHref='svg/icons.svg#price'/></svg>
          R$ 120,00
        </li>
        <li className='event-list--item'>
          <svg className='icon' aria-hidden='true' aria-label='Local'><use xlinkHref='svg/icons.svg#location'/></svg>
          <a href='https://www.google.com.br/maps?q=maksoud+plaza&um=1&ie=UTF-8&sa=X&ved=0ahUKEwinuq_pm4rMAhXKkZAKHfMfBgoQ_AUICCgC' target='_blank'>Maksound Plaza, São Paulo - SP</a>
        </li>
      </ul>
    </div>
  </article>
)

EventListItem.defaultProps = {

}

EventListItem.propTypes = {

}

export default EventListItem
