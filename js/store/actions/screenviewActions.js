'use strict'
import * as types from './actionTypes'
import { Navigation } from 'react-native-navigation'
let tabNavArray = [
  types.PORTFOLIO_SCREEN,
  types.HOME_SCREEN,
  types.ACTIONS_SCREEN,
]

export function loginScreen({id}) {
  return {
    type: types.LOGIN_SCREEN,
    componentId: id,
  }
}
export function homeScreen({id}) {
  return {
    type: types.HOME_SCREEN,
    componentId: id,
  }
}
export function tabNavigationPress({id, currentIndex, focusIndex, componentFromId, componentToId}) {
    console.log('registerNavigationButtonPressed action: ', id, types.HOME_SCREEN, types.ACTIONS_SCREEN)
    let componentName = tabNavArray[focusIndex]
    Navigation.mergeOptions(componentToId, {
      component: {
        name: componentToId,
        options: {
          customTransition: {
            animations: [
              { type: 'sharedElement', fromId: types.HOME_SCREEN, toId: types.ACTIONS_SCREEN, startDelay: 0, springVelocity: 0.2, duration: 0.5 }
            ],
            duration: 0.8
          }
        }
      }
    })
    return {
        type: types.TAB_NAV_ACTION,
        componentId: id,
        currentIndex: currentIndex,
        focusIndex: focusIndex,
        componentFromId: componentFromId,
        componentToId: componentToId,
    }
}
