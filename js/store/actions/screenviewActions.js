'use strict'
import * as types from './actionTypes'

export function loginScreen({id}) {
  return {
    type: types.LOGIN_SCREEN,
    componentId: id,
  }
}
