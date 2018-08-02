'use strict'
import { fork } from 'redux-saga/effects'
import * as initAppSaga from './initAppSaga'
import * as loginSaga from './loginSaga'
// Consider using takeEvery
export default function* root() {
  yield fork(initAppSaga)
  yield fork(loginSaga)
}
export * from './loginSaga'
