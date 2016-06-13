'use strict'

import React, { PropTypes } from 'react'
import BannerBox from '../../components/banner-box'

const getDate = (date) => {
  return `${date.day} - ${date.month}`
}

const HeaderBanner = ({ events }) => (
  <section className='banner'>
    <div className='banner-main'>
      <BannerBox
        link={events[0].link}
        title={events[0].title}
        date={getDate(events[0].date)}
        image={events[0].image} />
    </div>

    <div key={0} className='banner-aside'>
      {events.slice(1, 3).map((event, index) => (
        <BannerBox
          key={index}
          link={event.link}
          title={event.title}
          date={getDate(event.date)} />
      ))}
    </div>

    <div key={1} className='banner-aside'>
      {events.slice(3).map((event, index) => (
        <BannerBox
          key={index}
          link={event.link}
          title={event.title}
          date={getDate(event.date)} />
      ))}
    </div>
  </section>
)

HeaderBanner.propTypes = {
  events: PropTypes.array.isRequired
}

export default HeaderBanner
