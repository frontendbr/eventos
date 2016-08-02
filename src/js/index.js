'use strict'

import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'
import configureStore from './store/configure-store'
import reducers from './reducers/index'
import App from './containers/app/index'

const store = configureStore({ reducers })

const renderApp = (NextApp) => {
  render(
    <AppContainer>
      <Provider store={store}>
        <NextApp />
      </Provider>
    </AppContainer>,
    document.querySelector('[data-js="app"]')
  )
}

renderApp(App)

if (module.hot) {
  module.hot.accept('./containers/app/index', () => {
    const NextApp = require('./containers/app/index').default
    renderApp(NextApp)
  })
}

store.subscribe(() => {
  console.log(store.getState())
})
