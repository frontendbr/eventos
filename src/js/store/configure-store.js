'use strict'

import {
  createStore,
  compose,
  applyMiddleware,
  combineReducers
} from 'redux'
import thunkMiddleware from 'redux-thunk'

export default ({ initialState = {}, reducers, middleware = [] }) => {
  const rootReducer = combineReducers({ reducers })
  return compose(
    applyMiddleware(thunkMiddleware, ...middleware)
  )(createStore)(rootReducer, initialState)
}
