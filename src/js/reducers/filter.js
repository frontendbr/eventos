'use strict'

import {
  FILL_FILTER_SELECTS,
  CHOOSE_FILTER_SELECT,
  FILTER_BY_TEXT
} from '../actions/index'

const initialState = {
  months: {
    icon: { id: 'date', label: 'Data' },
    label: 'Escolha um mês',
    selected: '',
    options: [{
      text: 'Escolha um mês', value: ''
    }]
  },

  state: {
    icon: { id: 'location', label: 'Estado' },
    label: 'Escolha um estado',
    selected: '',
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

    case CHOOSE_FILTER_SELECT:
      return {
        ...state,
        [action.payload.field]: {
          ...state[action.payload.field],
          selected: action.payload.value
        }
      }

    case FILTER_BY_TEXT:
      return {
        ...state,
        searchField: action.payload.value
      }
  }
  return state
}

export default filter
