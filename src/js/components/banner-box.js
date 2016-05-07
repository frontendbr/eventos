'use strict'

import React, { PropTypes } from 'react'
import LazyImg from './lazy-img'

const BannerBox = ({ link, title, date, image }) => (
  <a className='banner-box' href={link} title={`${title} ${date}`}>
    {!!image && <LazyImg src={image} alt={title} />}
    <h2 className='title'>
      {`${title} `}<span className='date'>{date}</span>
    </h2>
  </a>
)

BannerBox.defaultProps = {
  link: '#'
}

BannerBox.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  link: PropTypes.string,
  image: PropTypes.string
}

export default BannerBox
