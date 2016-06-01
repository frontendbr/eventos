'use strict'

import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import EventListItem from '../../components/event-list-item'
// import Pagination from '../../components/pagination/index'

const Page = ({ events }) => (
  <section className='page'>
    <header className='page-header'>
      <h3 className='title'>Próximos Eventos</h3>
    </header>

    <div className='page-wrap'>
      {events.map((props, index) => (
        <EventListItem key={index} {...props} />
      ))}
      {/* <Pagination /> */}
    </div>

  </section>
)

Page.propTypes = {
  events: PropTypes.array.isRequired
}

const mapStateToProps = (state) => ({
  events: state.events.events.filter((_, index) => index >= 5)
})

export default connect(mapStateToProps)(Page)
