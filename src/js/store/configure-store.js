'use strict'

import {
  createStore,
  compose,
  applyMiddleware,
  combineReducers
} from 'redux'
import thunkMiddleware from 'redux-thunk'

export default ({ initialState = {}, reducers, middlewares = [] }) => {
  const rootReducer = combineReducers({
    ...reducers
  })
  return compose(
    applyMiddleware(thunkMiddleware, ...middlewares)
  )(createStore)(rootReducer, initialState)
}
