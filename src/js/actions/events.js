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
    ajax().get('data/events.json').then((events) => {
      dispatch({
        type: EVENTS_SUCCESS,
        payload: events
      })
    })
    .catch(() => {
      dispatch({ type: EVENTS_FAILED })
    })
  }
}
