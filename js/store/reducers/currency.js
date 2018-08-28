'use strict'
import { Platform, PlatformIOSStatic } from 'react-native'
import * as types from '../actions/actionTypes'
import { COLORS } from '../../constants'

const initialState = {
  isFetching: false,
  USD: null,
  EUR: null,
  BTC: null,
}
/*
const logKraken = async () => {
	// Display user's balance
	console.log('kraken balance', await kraken.api('Balance'))

	// Get Ticker Info
	console.log('kraken ticker info', await kraken.api('Ticker', { pair : 'XXBTZUSD' }))
}
*/
export default function currency(state = initialState, action) {
  switch(action.type) {
    case types.PRICE_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
      })
    case types.PRICE_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        USD: action.USD,
        EUR: action.EUR,
        BTC: action.BTC,
      })
    default:
      return state
    }
}
