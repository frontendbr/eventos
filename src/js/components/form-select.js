'use strict'

import React, { PropTypes } from 'react'
import SvgIcon from './svg-icon'

const FormSelect = ({ label, options, icon }) => (
  <div className='form-select'>
    {!!icon && <SvgIcon id={icon.id} label={icon.label} />}
    <label className='sr-only'>{label}</label>
    <select>
      {options.map((option) => (
        <option key={option.text} value={option.value}>
          {option.text}
        </option>
      ))}
    </select>
  </div>
)

FormSelect.defaultProps = {
  label: '',
  options: []
}

FormSelect.propTypes = {
  label: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  icon: PropTypes.shape({
    image: PropTypes.string,
    label: PropTypes.string
  })
}

export default FormSelect
