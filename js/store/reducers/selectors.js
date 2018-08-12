'use strict'
import { createSelector } from 'reselect'
//redux state selectore outside of react props
export const getUser = store => store && store.user
export const getComponentId = store => store && store.screenview.componentId
const currentScreenState = store => store && store.screenview

export const getCurrentIndex = createSelector(
  [currentScreenState],
  (currentScreenState) => {
    return currentScreenState
  }
)
