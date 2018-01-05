import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { routerMiddleware } from 'react-router-redux'
import rootReducer from './RootReducer'

export default function configureStore (history, initialState) {
  const routerMiddlewares = routerMiddleware(history)
  return createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(thunk, routerMiddlewares),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  )
}
