'use strict'

import React, { PropTypes } from 'react'
import LazyImg from './lazy-img'
import SvgIcon from './svg-icon'

const getMonth = (month) => {
  const months = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro'
  ]
  const m = months.indexOf(month) + 1
  return (m < 10 ? '0' : '') + m
}

const formatDate = ({ day, month, year }) => {
  return `${day}/${getMonth(month)}/${year}`
}

const EventListItem = ({
  title,
  image,
  innerLink,
  link,
  date,
  price,
  location,
  locationUrl,
  shortDescription
}) => (
  <article className='event'>
    <a className='event-media' href={innerLink} title='Ver evento'>
      <LazyImg src={image || '/svg/logo.svg'} alt={title} />
    </a>
    <div className='event-main'>
      <a className='content' href={innerLink} title='Ver evento'>
        <h2>{title}</h2>
        <p>{shortDescription}</p>
      </a>
      {!!link &&
        <a className='btn-link' href={link} target='_blank' title='Visitar site oficial'>
          <SvgIcon id='link' label='Link' />
          {link.replace(/^http:\/\/(?:www.)?(.+?)\/$/, '$1')}
        </a>
      }
      <ul className='event-list'>
        <li className='event-list--item'>
          <SvgIcon id='date' label='Data' />
          {formatDate(date)}
        </li>
        <li className='event-list--item'>
          <SvgIcon id='price' label='Preço' />
          {price}
        </li>
        {!!locationUrl &&
          <li className='event-list--item'>
            <SvgIcon id='location' label='Local' />
            <a href={locationUrl} target='_blank'>{location}</a>
          </li>
        }
      </ul>
    </div>
  </article>
)

EventListItem.defaultProps = {
  date: {
    day: '00',
    month: 'xx',
    year: '0000'
  },
  price: 'Grátis'
}

EventListItem.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
  innerLink: PropTypes.string.isRequired,
  link: PropTypes.string,
  date: PropTypes.shape({
    day: PropTypes.number.isRequired,
    month: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired
  }).isRequired,
  price: PropTypes.string,
  location: PropTypes.string,
  locationUrl: PropTypes.string,
  shortDescription: PropTypes.string.isRequired
}

export default EventListItem
