'use strict'
import configureMockStore from 'redux-mock-store'
import createSagaMiddleware from 'redux-saga'

const middlewares = [ createSagaMiddleware() ]
const mockStore = configureMockStore(middlewares)

export default mockStore
