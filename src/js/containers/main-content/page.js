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

const mapStateToProps = (state) => {
  const { filter } = state
  const monthsFilter = filter.months
  const stateFilter = filter.state
  return {
    events: state.events.events
      .filter((event) => {
        if (monthsFilter.selected && stateFilter.selected) {
          console.log('selecionou os dois!')
          return event.shouldShowByMonth !== false &&
            event.shouldShowByState !== false
        }

        if (monthsFilter.selected && !stateFilter.selected) {
          console.log('selecinou só mês!')
          return event.shouldShowByMonth !== false
        }

        if (!monthsFilter.selected && stateFilter.selected) {
          console.log('selecionou só estado!')
          return event.shouldShowByState !== false
        }

        console.log('sem seleção!')
        return event
      })
  }
}

export default connect(mapStateToProps)(Page)
