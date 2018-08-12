'use strict'
import { Navigation } from 'react-native-navigation'
import { takeEvery } from 'redux-saga/effects'
import * as types from '../actions/actionTypes'

let tabNavArray = [
  types.PORTFOLIO_SCREEN,
  types.HOME_SCREEN,
  types.ACTIONS_SCREEN,
]

function *watchNavigationInteraction() {
  while(true) {
    console.log('*watchNavigationInteraction')
//    const { currentIndex, focusIndex, componentId, componentFromId, componentToId, user } = yield takeEvery(types.TAB_NAV_ACTION)
  //  let componentName = tabNavArray[focusIndex]
/*    Navigation.mergeOptions(componentId, {
      component: {
        name: componentName,
        options: {
          customTransition: {
            animations: [
              { type: 'sharedElement', fromId: componentFromId, toId: componentToId, startDelay: 0, springVelocity: 0.2, duration: 0.5 }
            ],
            duration: 0.8
          }
        }
      }
    });*/
  }
}
export default function* root() {
  yield fork(watchNavigationInteraction)
}
