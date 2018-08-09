'use strict'
import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

class AssetList extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <View>
        <View>
        </View>
        <View>
        <Text>your assets</Text>
        <Text>$12.71</Text><Text>USD</Text>
        </View>
      </View>
    )
  }
}
export { AssetList }
