'use strict'
import { combineReducers } from 'redux'
//import entities from './entities'
import user from './user'
import screenview from './screenview'
import currency from './currency'

export default combineReducers({
  user,
  screenview,
  currency,
  //entities,
})
