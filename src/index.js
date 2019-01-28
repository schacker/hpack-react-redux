import './styles/common.styl'

import React from 'react'
import { render } from 'react-dom'
import makeStore from './store/index'
import { setStore } from './store/_store'
import { Provider } from 'react-redux'

import App from './pages/Main'
import { routes } from './routes/index.js'

const store = makeStore()

store.subscribe(() => {
  console.log(store.getState())
})
setStore(store)

render(
  <Provider store={store}>
    <App router={routes} />
  </Provider>,
  document.getElementById('app')
)
