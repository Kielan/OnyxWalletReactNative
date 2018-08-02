'use strict'
import * as types from '../actions/actionTypes'

const initialState = {
  isAuthenticated: false,
  isFetching: false,
  token: '',
  user: {},
  errorMessage: '',
}

export default function user(state = initialState, action) {
  switch(action.type) {
    case types.LOGIN_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        isAuthenticated: false,
      });
    case types.LOGIN_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: true,
        token: action.token,
        failure: false,
        user: action.user,
      });
    case types.LOGIN_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: false,
        failure: true,
        errorMessage: action.err,
      });
    case types.LOGOUT:
      return initialState;
    default:
      return state;
  }
}
