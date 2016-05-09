'use strict'

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './containers/app/index'
import configureStore from './store/configure-store'
import reducers from './reducers/index'

const store = configureStore({ reducers })

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('[data-js="app"]')
)

store.subscribe(() => {
  console.log(store.getState())
})
