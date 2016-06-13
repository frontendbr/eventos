'use strict'

export const FETCH_EVENTS = 'FETCH_EVENTS'
export const EVENTS_SUCCESS = 'EVENTS_SUCCESS'
export const EVENTS_FAILED = 'EVENTS_FAILED'

export const FILL_FILTER_SELECTS = 'FILL_FILTER_SELECTS'
export const CHOOSE_FILTER_SELECT = 'CHOOSE_FILTER_SELECT'
export const FILTER_BY_TEXT = 'FILTER_BY_TEXT'

export {
  fetchEvents,
  eventsSuccess,
  eventsFailed
} from './events'

export {
  prepareFilterSelects,
  chooseFilterSelect,
  filterByText
} from './filter'
