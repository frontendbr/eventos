'use strict'

import {
  FETCH_EVENTS,
  EVENTS_SUCCESS,
  EVENTS_FAILED
} from '../actions/index'

const initialState = {
  events: [{
    title: '...',
    date: { day: 0, month: '', year: 0 },
    image: ''
  }, {
    title: '...',
    date: { day: 0, month: '', year: 0 }
  }, {
    title: '...',
    date: { day: 0, month: '', year: 0 }
  }, {
    title: '...',
    date: { day: 0, month: '', year: 0 }
  }, {
    title: '...',
    date: { day: 0, month: '', year: 0 }
  }],
  isFetching: false
}

const events = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EVENTS:
      return {
        ...state,
        isFetching: true
      }

    case EVENTS_SUCCESS:
      return {
        ...state,
        events: [...action.payload],
        isFetching: false
      }

    case EVENTS_FAILED:
      return {
        ...state,
        isFetching: false
      }
  }
  return state
}

export default events
