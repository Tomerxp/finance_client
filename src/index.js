import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import * as serviceWorker from './serviceWorker'

import App from './components/App'
import reducers from './reducers'
import { getFinanceRates } from './actions/ratesActions'

import './index.scss'
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css'
import 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min.css'

const store = createStore(reducers, applyMiddleware(thunk))

store.dispatch(getFinanceRates())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
