'use strict'

import {
  EVENTS_SUCCESS,
  FILL_FILTER_SELECTS
} from '../actions/index'

const initialState = {
  months: {
    icon: { id: 'date', label: 'Data' },
    label: 'Escolha um mês',
    options: [{
      text: 'Escolha um mês', value: ''
    }]
  },

  state: {
    icon: { id: 'location', label: 'Estado' },
    label: 'Escolha um estado',
    options: [{
      text: 'Escolha um estado', value: ''
    }]
  },

  searchField: ''
}

const filter = (state = initialState, action) => {
  switch (action.type) {
    case FILL_FILTER_SELECTS:
      return {
        ...state,
        [action.payload.select]: {
          ...state[action.payload.select],
          options: [
            ...state[action.payload.select].options,
            ...action.payload.options
          ]
        }
      }
  }
  return state
}

export default filter
