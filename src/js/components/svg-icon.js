'use strict'

import React, { PropTypes } from 'react'

const SvgIcon = ({ id, label }) => (
  <svg className='icon' aria-hidden='true' aria-label={label}>
    <use xlinkHref={`svg/icons.svg#${id}`} />
  </svg>
)

SvgIcon.defaultProps = {
  label: ''
}

SvgIcon.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string
}

export default SvgIcon
