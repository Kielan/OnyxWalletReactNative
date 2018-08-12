'use strict'
import { createSelector } from 'reselect'
//redux state selectore outside of react props
export const getUser = store => store && store.user
export const getComponentId = store => store && store.screenview.componentId
const currentScreenState = store => store && store.screenview
export const getCurrentIndex = store => store && store.screenview.currentIndex
/*
export const getCurrentIndex = createSelector(
  [currentScreenState],
  (currentScreenState) => {
    return currentScreenState
  }
)
*/
/*
const getFocusIndex = (index) => {
  let tabNavArray = [
    types.PORTFOLIO_SCREEN,
    types.HOME_SCREEN,
    types.ACTIONS_SCREEN,
  ]
  console.log('tabNavArray[index]: ', tabNavArray[index])
  return tabNavArray[index]
}
*/
export const componentToId = store => {

}
export const componentFromId = store => {

}
