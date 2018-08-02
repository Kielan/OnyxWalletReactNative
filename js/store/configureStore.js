'use strict'
import { createStore, applyMiddleware, compose  } from 'redux'
import createLogger from 'redux-logger'
import * as storage from 'redux-storage'
//import * as createEngine from '../lib/reactiveAsyncStorageBridge.js'
import createEngine from 'redux-storage-engine-reactnativeasyncstorage'
import devTools from 'remote-redux-devtools'
import createSagaMiddleware from 'redux-saga'
import sagas from './sagas'
import reducers from './reducers'
const isDebuggingInChrome = __DEV__ && !!window.navigator.userAgent

const logger = createLogger({
  predicate: (getState, action) => isDebuggingInChrome,
  collapsed: true,
  duration: true,
  diff: true,
});

export default function configureStore(onComplete) {

  const engine = createEngine('AppTree');
  const storeMiddleware = storage.createMiddleware(engine);
  const sagaMiddleware = createSagaMiddleware();

  let store = createStore(
    storage.reducer(reducers), //Apply redux-storage so we can persist Redux state to disk
    compose(
      applyMiddleware(
        sagaMiddleware,
        storeMiddleware,
        logger,
      ),
      devTools(),
    ),
  );

  if (isDebuggingInChrome) {
    window.store = store;
  }

  const load = storage.createLoader(engine);
  load(store)
    .then(onComplete)
    .catch(() => console.log('Failed to load previous state'));

  sagaMiddleware.run(sagas);

  return store;
}
