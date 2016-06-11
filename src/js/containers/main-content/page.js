'use strict'

import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import EventListItem from '../../components/event-list-item'
// import Pagination from '../../components/pagination/index'

const Page = ({ events }) => {
  return (
    <section className='page'>
      <header className='page-header'>
        <h3 className='title'>Próximos Eventos</h3>
      </header>

      {!events.length &&
        <div className='page-wrap'>
          Nenhum evento encontrado
        </div>
      }

      {!!events.length &&
        <div className='page-wrap'>
          {events.map((props, index) => (
            <EventListItem key={index} {...props} />
          ))}
          {/* <Pagination /> */}
        </div>
      }

    </section>
  )
}

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
          return event.shouldShowByMonth !== false &&
            event.shouldShowByState !== false
        }

        if (monthsFilter.selected && !stateFilter.selected) {
          return event.shouldShowByMonth !== false
        }

        if (!monthsFilter.selected && stateFilter.selected) {
          return event.shouldShowByState !== false
        }

        return event
      })
      .filter((event) => {
        return event.shouldShowByText !== false
      })
  }
}

export default connect(mapStateToProps)(Page)
