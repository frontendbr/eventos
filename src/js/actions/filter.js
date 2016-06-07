'use strict'

import {
  FILL_FILTER_SELECTS
} from './index'

const fillFilterSelect = (select, options) => ({
  type: FILL_FILTER_SELECTS,
  payload: {
    select, options
  }
})

export const prepareFilterSelects = (events) => {
  return (dispatch) => {
    const months = [{
      text: 'Janeiro',
      value: 'Janeiro'
    }, {
      text: 'Fevereiro',
      value: 'Fevereiro'
    }]

    const state = [{
      text: 'SP',
      value: 'SP'
    }]
    dispatch(fillFilterSelect('months', months))
    dispatch(fillFilterSelect('state', state))
  }
}
