'use strict'
import { Platform, PlatformIOSStatic } from 'react-native'
import * as types from '../actions/actionTypes'

const initialState = {
  componentId: false,
  width: '',
  height: {},
  isIpad: true,
  errorMessage: '',
  currentIndex: 1,
  focusIndex: 1,
}

export default function screenview(state = initialState, action) {
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
    case types.HOME_SCREEN:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: true,
        token: action.token,
        failure: false,
        user: action.user,
      })
    case types.TAB_NAV_ACTION:
      return Object.assign({}, state, {
        currentIndex: action.currentIndex,
        focusIndex: action.focusIndex,
        componentId: action.componentId,
        componentFromId: action.componentFromId,
        componentToId: action.componentToId,
      })
    default:
      return state
  }
}
