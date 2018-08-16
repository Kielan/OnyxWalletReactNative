'use strict'
import {ActivityIndicator} from 'react-native'
import React from 'react'
import * as renderer from 'react-test-renderer'

// These serve as integration tests for the jest-react-native preset.
it('renders the Home and TopBar component correctly', () => {
//  const ActivityIndicator = require('ActivityIndicator')
  const tree = renderer
    .create(<ActivityIndicator animating={true} size="small" />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
/*
it(':ios: shows splash screen and then login', async () => {
//  await elementById(testIDs.COMPLEX_LAYOUT_BUTTON).tap()
//  await elementById(testIDs.EXTERNAL_COMPONENT_IN_STACK).tap()
  await expect(elementByLabel('animateHomeLabel')).toBeVisible()
})

it(':ios: shows external component in stack in modal', async () => {
//  await elementById(testIDs.COMPLEX_LAYOUT_BUTTON).tap()
//  await elementById(testIDs.EXTERNAL_COMPONENT_IN_STACK).tap()
  await expect(elementByLabel('animateHomeLabel')).toBeVisible()
})
*/
