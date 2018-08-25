'use strict'
import { Platform, PlatformIOSStatic } from 'react-native'
import * as types from '../actions/actionTypes'
import { COLORS, kk } from '../../constants'
//https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD,EUR
const initialState = {
  isFetching: false,
  USD: null,
  EUR: null,
  BTC: null,
}
import KrakenClient from '../../utils/kraken'
const kraken       = new KrakenClient(kk.public_key, kk.private_key)

(async () => {
	// Display user's balance
	console.log(await kraken.api('Balance'))

	// Get Ticker Info
	console.log(await kraken.api('Ticker', { pair : 'XXBTZUSD' }))
})()

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
