'use strict'

import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import HeaderBanner from './header-banner'
// import HeaderFilter from './header-filter'
import { fetchEvents } from '../../actions/index'

class Header extends Component {
  componentDidMount () {
    this.props.dispatch(fetchEvents())
  }

  render () {
    return (
      <header className='wellness'>
        <h1 className='title'>
          Encontre eventos de Front-End em todo o Brasil
        </h1>

        <HeaderBanner events={this.props.events} />
        {/* <HeaderFilter /> */}
      </header>
    )
  }
}

Header.propTypes = {
  events: PropTypes.shape.isRequired
}

const mapStateToProps = (state) => ({
  events: state.events.events.filter((_, index) => index < 5)
})

export default connect(mapStateToProps)(Header)
