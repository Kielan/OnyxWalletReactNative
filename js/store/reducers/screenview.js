'use strict'
import { Platform, PlatformIOSStatic } from 'react-native'
import * as types from '../actions/actionTypes'

const initialState = {
  componentId: false,
  width: '',
  height: {},
  isIpad: Platform.OS === 'ios' && (Platform as PlatformIOSStatic).isPad,
  errorMessage: '',
  passProps: {
    id,
  },
  options: {
    topBar: {
      title: {
        text: id,
      }
    }
  },
}

export default function user(state = initialState, action) {
  switch(action.type) {
    case types.LOGIN_SCREEN:
      return Object.assign({}, state, {
        componentId: action.componentId
      })
    case types.ACCOUNT_SCREEN:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: true,
        token: action.token,
        failure: false,
        user: action.user,
      })
    default:
      return state
  }
}
