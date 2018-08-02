'use strict'
import { Actions } from 'react-native-router-flux'
import * as types from './actionTypes'
//import { authenticationModule } from '../../modules'

export function loginRequest(email, password) {
  return {
    type: types.LOGIN_REQUEST,
    email,
    password,
  }
}

export function loginSuccess({token, user}) {
  return {
    type: types.LOGIN_SUCCESS,
    token,
    user,
  }
}

export function loginFailure(err) {
  return {
    type: types.LOGIN_FAILURE,
    err,
  }
}

export function logout() {
  return {
    type: types.LOGOUT,
  }
}
