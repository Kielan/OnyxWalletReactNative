'use strict'
import { combineReducers } from 'redux'
//import entities from './entities'
import user from './user'
import screenview from './screenview'

export default combineReducers({
  user,
  screenview,
  //entities,
})
