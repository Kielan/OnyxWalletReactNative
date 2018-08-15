'use strict'
import 'react-native'
import React from 'react'
// These serve as integration tests for the jest-react-native preset.
it('renders the Home and TopBar component correctly', () => {
  const ActivityIndicator = require('ActivityIndicator')
  const tree = renderer
    .create(<ActivityIndicator animating={true} size="small" />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
