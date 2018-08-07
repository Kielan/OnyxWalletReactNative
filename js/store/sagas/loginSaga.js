'use strict'
import React from 'react'
import { take, put, call, fork, select } from 'redux-saga/effects'
import { loginSuccess, loginFailure, loginHydrate } from '../actions/loginActions'
const loginData = {
  token: 'my secret token',
  user: {
    name: 'feitico',
    email: 'user@gmail.com',
  },
}
function loginCall({email, password}) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email == 'user@gmail.com') {
        resolve(loginData)
      } else {
        reject({status: 'wrong email or password'})
      }
    }, 1000) // 1 second
  })
}
function loginHydateCall({email, password}) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(loginData)
    }, 1000) // 1 second
  })
}
function *watchLoginRequest() {
  while(true) {
    const { email, password } = yield take(types.LOGIN_REQUEST)

    try {
      const payload = {
        email,
        password,
      }
      const response = yield call(loginCall, payload)

      yield put(loginSuccess(response))
      console.log('SAGA LOGIN SUCCESS: ', response)
    } catch (err) {
      console.log('SAGA LOGIN ERR: ', err)
      yield put(loginFailure(err.status))
    }
  }
}
function *watchLoginSuccess() {
  while(true) {
    const { token, user } = yield take(types.LOGIN_SUCCESS)

    try {
      const payload = {
        token,
        user,
      }
      const response = yield call(loginCall, payload)

      yield put(loginHydrate(payload))
      console.log('SAGA LOGIN SUCCESS: ', response)
    } catch (err) {
      console.log('SAGA LOGIN ERR: ', err)
      yield put(loginFailure(err.status))
    }
  }
}

export default function* root() {
  yield fork(watchLoginRequest)
}
