'use strict'

import ajax from '@fdaciuk/ajax'
import {
  FETCH_EVENTS,
  EVENTS_SUCCESS,
  EVENTS_FAILED,

  prepareFilterSelects
} from './index'

export const eventsSuccess = (events) => ({
  type: EVENTS_SUCCESS,
  payload: { events }
})

export const eventsFailed = () => ({
  type: EVENTS_FAILED
})

export const fetchEvents = () => {
  return (dispatch, getState) => {
    const { isFetching } = getState().events
    if (isFetching) {
      return Promise.resolve()
    }
    dispatch({ type: FETCH_EVENTS })
    ajax().get('data/events.json').then((events) => {
      dispatch(eventsSuccess(events))
      dispatch(prepareFilterSelects(events))
    })
    .catch(() => {
      dispatch(eventsFailed())
    })
  }
}
