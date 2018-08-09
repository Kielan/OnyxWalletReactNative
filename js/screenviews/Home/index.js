'use strict'
import React, { Component } from 'react'
import { AssetDataGraph } from '../../components/AssetDataGraph'
import { AssetList } from '../../components/AssetList'
import { TouchableHighlight, TextInput, Text, View } from 'react-native'

export class HomeScreen extends Component {
  render() {//{...graphProps}
    return (
      <View>
        <View>
          <Text>THU FEB 18, 3:00AM</Text>
        </View>
        <View>
          <Text>$26.81</Text>
          <Text>USD</Text>
        </View>
        <AssetDataGraph />
        <AssetList />
      </View>
    )
  }
}
