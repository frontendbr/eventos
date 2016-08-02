'use strict'

import React, { PropTypes } from 'react'
import SvgIcon from './svg-icon'

const FormSelect = ({
  label,
  selected,
  options,
  icon,
  handleChange
}) => {
  if (!options.length) {
    return null
  }

  return (
    <div className='form-select'>
      {!!icon && <SvgIcon id={icon.id} label={icon.label} />}
      <label className='sr-only'>{label}</label>
      <select value={selected} onChange={handleChange}>
        {options.map((option, index) => (
          <option key={option.text + index} value={option.value}>
            {option.text}
          </option>
        ))}
      </select>
    </div>
  )
}

FormSelect.defaultProps = {
  label: '',
  options: []
}

FormSelect.propTypes = {
  label: PropTypes.string.isRequired,
  selected: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  icon: PropTypes.shape({
    image: PropTypes.string,
    label: PropTypes.string
  })
}

export default FormSelect
