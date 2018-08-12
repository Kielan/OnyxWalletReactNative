'use strict'
import { Navigation } from 'react-native-navigation'
import { createStore, applyMiddleware, compose  } from 'redux'
import createLogger from 'redux-logger'
import * as storage from 'redux-storage'
//import { middleware as storageMiddleware } from 'react-native-redux-storage-middleware'
import devTools from 'remote-redux-devtools'
import createSagaMiddleware, { END } from 'redux-saga'
import sagas from './sagas'
import reducers from './reducers'
const isDebuggingInChrome = !!window.navigator.userAgent
/*
const logger = createLogger({
  predicate: (getState, action) => isDebuggingInChrome,
  collapsed: true,
  duration: true,
  diff: true,
})
*/

export function configureStore(onComplete) {

  const sagaMiddleware = createSagaMiddleware()

  let store = createStore(
    storage.reducer(reducers), //Apply redux-storage so we can persist Redux state to disk
    compose(
      applyMiddleware(
        sagaMiddleware,
//        storageMiddleware,
//        logger,
      ),
      devTools(),
    ),
  )

  sagaMiddleware.run
  if (isDebuggingInChrome) {
    window.store = store
  }
  const load = storage.createLoader()
  load(store)
    .then(onComplete)
    .catch(() => console.log('Failed to load previous state'))

  store.runSaga = sagaMiddleware.run(sagas)
  store.close = () => store.dispatch(END)

  return store
}
