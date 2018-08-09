'use strict'
import React, { Component } from 'react'
import { ART, LayoutAnimation, View, Text, TouchableOpacity } from 'react-native'

class AssetDataGraph extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <View>
      <TouchableOpacity><Text>BTC/USD</Text></TouchableOpacity>
      <View><Text>your assets</Text></View>
      </View>
    )
  }
}
export { AssetDataGraph }
