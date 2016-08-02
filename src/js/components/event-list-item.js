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
  link,
  date,
  price,
  location,
  shortDescription
}) => (
  <article className='event'>
    <a className='event-media' href={link} title='Ver evento'>
      <LazyImg src={image || 'svg/logo.svg'} alt={title} />
    </a>
    <div className='event-main'>
      <a className='content' href={link} title='Ver evento'>
        <h2>{title}</h2>
        <p>{shortDescription}</p>
      </a>
      {!!link &&
        <a className='btn-link' href={link} target='_blank' title='Visitar site oficial'>
          <SvgIcon id='link' label='Link' />
          {link}
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
        {!!location.locationUrl &&
          <li className='event-list--item'>
            <SvgIcon id='location' label='Local' />
            <a href={location.locationUrl} target='_blank'>
              {`${location.address} - ${location.city}/${location.state}`}
            </a>
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
  price: 'Grátis',
  location: {
    locationUrl: ''
  },
  shortDescription: ''
}

EventListItem.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
  link: PropTypes.string,
  date: PropTypes.shape({
    day: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string
    ]).isRequired,
    month: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired
  }).isRequired,
  price: PropTypes.string,
  location: PropTypes.shape({
    city: PropTypes.string,
    state: PropTypes.string,
    address: PropTypes.string,
    locationUrl: PropTypes.string
  }),
  shortDescription: PropTypes.string.isRequired
}

export default EventListItem
