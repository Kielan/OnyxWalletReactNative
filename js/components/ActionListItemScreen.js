'use strict'
import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

class ActiontListItem extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <View>
        <View>
          <Text>DEPOSIT COMPLETE</Text>
          <Text>5 DAYS AGO</Text>
        </View>
        <View>
          <Text>+$</Text>
          <Text>12.71</Text>
          <Text>USD</Text>
        </View>
        <View>
        <Text>...</Text>
        </View>
      </View>
    )
  }
}
export { AssetList }
