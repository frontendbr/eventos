'use strict'

import {
  FETCH_EVENTS,
  EVENTS_SUCCESS,
  EVENTS_FAILED,

  CHOOSE_FILTER_SELECT,
  FILTER_BY_TEXT
} from '../actions/index'

const initialState = {
  events: Array.apply(null, { length: 5 }).map(() => ({
    title: '...',
    date: { day: 0, month: '', year: 0 },
    image: ''
  })),
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
        events: action.payload.events,
        isFetching: false
      }

    case EVENTS_FAILED:
      return {
        ...state,
        isFetching: false
      }

    case CHOOSE_FILTER_SELECT:
      const { field, value } = action.payload
      return {
        ...state,
        events: state.events.map((event) => {
          let shouldShowByMonth = event.shouldShowByMonth === undefined
            ? true
            : event.shouldShowByMonth
          let shouldShowByState = event.shouldShowByState === undefined
            ? true
            : event.shouldShowByState

          if (field === 'months') {
            shouldShowByMonth = !value
              ? true
              : event.date.month === value
          }

          if (field === 'state') {
            shouldShowByState = !value
              ? true
              : event.location.state === value
          }

          return {
            ...event,
            shouldShowByMonth,
            shouldShowByState
          }
        })
      }

    case FILTER_BY_TEXT:
      return {
        ...state,
        events: state.events.map((event) => {
          return {
            ...event,
            shouldShowByText: !!event.title
              .match(new RegExp(`${action.payload.value}`, 'i'))
          }
        })
      }
  }
  return state
}

export default events
