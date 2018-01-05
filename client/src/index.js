import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './Store/ConfigureStore'
import createHistory from 'history/createBrowserHistory'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
const history = createHistory()
const store = configureStore(history)
ReactDOM.render(
  <Provider store={store}>
    <App history={history} />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
