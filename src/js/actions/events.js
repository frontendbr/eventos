'use strict'

import ajax from '@fdaciuk/ajax'
import {
  FETCH_EVENTS,
  EVENTS_SUCCESS,
  EVENTS_FAILED
} from './index'

export const fetchEvents = () => {
  return (dispatch, getState) => {
    const { isFetching } = getState().events
    if (isFetching) {
      return Promise.resolve()
    }
    dispatch({ type: FETCH_EVENTS })
    ajax().get('/data/events.json').then((events) => {
      console.log('fetch events success', events)
      dispatch({
        type: EVENTS_SUCCESS,
        payload: events
      })
    })
    .catch((error) => {
      console.log('fetch events failed', error)
      dispatch({ type: EVENTS_FAILED })
    })
  }
}
