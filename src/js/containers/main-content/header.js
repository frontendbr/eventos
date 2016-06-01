'use strict'

import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import HeaderBanner from './header-banner'
import HeaderFilter from './header-filter'
import { fetchEvents } from '../../actions/index'

class Header extends Component {
  componentDidMount () {
    this.props.dispatch(fetchEvents())
  }

  render () {
    const { events, monthFilter, stateFilter, searchField } = this.props
    return (
      <header className='wellness'>
        <h1 className='title'>
          Encontre eventos de Front-End em todo o Brasil
        </h1>

        <HeaderBanner events={events} />
        <HeaderFilter
          monthFilter={monthFilter}
          stateFilter={stateFilter}
          searchField={searchField}
        />
      </header>
    )
  }
}

Header.defaultProps = {
  searchField: ''
}

Header.propTypes = {
  events: PropTypes.array.isRequired,
  monthFilter: PropTypes.object.isRequired,
  stateFilter: PropTypes.object.isRequired,
  searchField: PropTypes.string.isRequired
}

const mapStateToProps = (state) => ({
  events: state.events.events.filter((_, index) => index < 5),
  monthFilter: state.filter.months,
  stateFilter: state.filter.state,
  searchField: state.filter.searchField
})

export default connect(mapStateToProps)(Header)
