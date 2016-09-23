'use strict'

import React, { PropTypes, Component } from 'react'

class LazyImg extends Component {
  constructor () {
    super()
    this.handleLoad = this.handleLoad.bind(this)
  }

  componentWillMount () {
    this.setState({ loaded: false })
    this.img = {}
  }

  handleLoad () {
    this.setState({ loaded: true })
    this.props.onImageLoad()
  }

  componentDidMount () {
    if (this.img.complete && !this.state.loaded) {
      this.handleLoad()
    }
  }

  render () {
    return (
      <img src={this.props.src}
        onLoad={this.handleLoad}
        className={
          `${this.state.loaded ? 'lazyloaded' : 'lazyload'} lazyblur`
        }
        ref={(img) => (this.img = img)}
      />
    )
  }
}

LazyImg.defaultProps = {
  onImageLoad: () => {}
}

LazyImg.propTypes = {
  src: PropTypes.string.isRequired,
  onImageLoad: PropTypes.func
}

export default LazyImg
