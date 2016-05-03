'use strict'

import React, { PropTypes, Component } from 'react'

class LazyImg extends Component {
  componentWillMount () {
    this.setState({ isLoaded: false })
  }

  handleLoad () {
    this.setState({ isLoaded: true })
  }

  render () {
    return (
      <img
        className={`${this.state.isLoaded ? 'lazyloaded' : 'lazyload'} lazyblur`}
        src={this.props.src}
        onLoad={() => this.handleLoad()}
        alt={this.props.alt} />
    )
  }
}

LazyImg.defaultProps = {
  alt: ''
}

LazyImg.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string
}

export default LazyImg
