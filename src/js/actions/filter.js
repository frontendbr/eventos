'use strict'

import {
  FILL_FILTER_SELECTS,
  CHOOSE_FILTER_SELECT,
  FILTER_BY_TEXT
} from './index'

const fillFilterSelect = (select, options) => ({
  type: FILL_FILTER_SELECTS,
  payload: {
    select, options
  }
})

const removeDuplicatedEntries = (allEntries) => {
  const options = []
  allEntries.forEach((entry) => {
    if (options.indexOf(entry) === -1) {
      options.push(entry)
    }
  })
  return options
}

export const prepareFilterSelects = (events) => {
  return (dispatch) => {
    const allMonths = events.map((event) => {
      return event.date.month
    })

    const allStates = events.map((event) => {
      return event.location.state
    })

    const months = removeDuplicatedEntries(allMonths).map((month) => {
      return {
        text: month,
        value: month
      }
    })

    const states = removeDuplicatedEntries(allStates).map((state) => {
      return {
        text: state,
        value: state
      }
    })

    dispatch(fillFilterSelect('months', months))
    dispatch(fillFilterSelect('state', states))
  }
}

export const chooseFilterSelect = (payload) => ({
  type: CHOOSE_FILTER_SELECT,
  payload
})

export const filterByText = (value) => ({
  type: FILTER_BY_TEXT,
  payload: { value }
})
