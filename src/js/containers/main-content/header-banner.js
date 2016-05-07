'use strict'

import React from 'react'
import BannerBox from '../../components/banner-box'

const HeaderBanner = () => (
  <section className='banner'>
    <div className='banner-main'>
      <BannerBox
        link='inner.html'
        title='Conferência CSS Brasil'
        date='20 - Maio'
        image='http://www.conferenciacssbrasil.com.br/build/img/css-brasil.png' />
    </div>

    <div key={0} className='banner-aside'>
      <BannerBox key={0} link='inner.html' title='Front in Sampa' date='20 - Maio' />
      <BannerBox key={1} link='inner.html' title='Meetup CSS' date='20 - Maio' />
    </div>

    <div key={1} className='banner-aside'>
      <BannerBox key={0} link='inner.html' title='BrazilJS' date='20 - Maio' />
      <BannerBox key={1} link='inner.html' title='Front UX' date='20 - Maio' />
    </div>
  </section>
)

export default HeaderBanner
